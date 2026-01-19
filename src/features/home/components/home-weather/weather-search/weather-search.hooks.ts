import { createListCollection } from '@ark-ui/react/collection';
import { useForm } from '@tanstack/react-form';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { filter, map, pipe, uniqueBy } from 'remeda';

import { useHomePageCountryApiOptions } from '@/features/home/hooks/use-country-api';
import { useLocationStore } from '@/features/home/stores/location-store';

export function useSearchWeather() {
  const form = useForm({
    defaultValues: {
      search: '',
    },
    onSubmit: ({ value }) => {
      setSearch(value.search);
      setOpen(true);
    },
  });

  const [search, setSearch] = useState('');
  const query = useQuery({
    ...useHomePageCountryApiOptions({ name: search }),
    enabled: !!search,
    select: (val) => {
      return pipe(
        val.results,
        filter((data) => !!data.country),
        map((data) => ({
          label: `${data.name}, ${data.country}`,
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

  const setLocation = useLocationStore((state) => state.setLocation);

  const [open, setOpen] = useState(false);

  return { form, query, collection, setLocation, open, setOpen };
}
