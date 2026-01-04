import { createListCollection } from '@ark-ui/react/collection';
import { useForm, useStore } from '@tanstack/react-form';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import { filter, map, pipe, uniqueBy } from 'remeda';

import { HOME_PAGE_QUERY } from '@/features/home/home-page.query';

export function useSearchWeather() {
  const form = useForm({
    defaultValues: {
      search: '',
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  const storeSearch = useStore(form.store, (state) => state.values.search);
  const [search, setSearch] = useState('');
  useDebounce(
    () => {
      setSearch(storeSearch);
    },
    500,
    [storeSearch],
  );

  const query = useQuery({
    ...HOME_PAGE_QUERY.countryDropdown({ name: search }),
    enabled: !!search,
    select: (val) => {
      return pipe(
        val.results,
        filter((data) => !!data.country),
        map((data) => ({
          label: `(${data.country}) ${data.name}`,
          value: {
            latitude: data.latitude,
            longtitude: data.longitude,
          },
        })),
        uniqueBy((data) => data.label),
      );
    },
  });

  const collection = createListCollection({
    items: query.data ? query.data : [],
    itemToString: (v) => v.label,
    itemToValue: (v) => `${v.value.latitude}${v.value.longtitude}`,
  });

  return { form, query, collection };
}
