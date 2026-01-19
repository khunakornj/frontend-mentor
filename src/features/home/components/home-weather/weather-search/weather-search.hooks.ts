import { createListCollection } from '@ark-ui/react/collection';
import { useDebouncedValue, useSetState } from '@mantine/hooks';
import { useForm, useStore } from '@tanstack/react-form';
import { useQuery } from '@tanstack/react-query';
import { filter, map, pipe, uniqueBy } from 'remeda';

import { useHomePageCountryApiOptions } from '@/features/home/hooks/use-country-api';
import { useLocationStore } from '@/features/home/stores/location-store';

export function useSearchWeather() {
  const form = useForm({
    defaultValues: {
      search: '',
    },
    onSubmit: () => {
      submitLocation();
    },
  });

  const storeSearch = useStore(form.store, (state) => state.values.search);
  const [debounceSearch] = useDebouncedValue(storeSearch, 500);

  const query = useQuery({
    ...useHomePageCountryApiOptions({ name: debounceSearch }),
    enabled: !!debounceSearch,
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

  const [location, setLocation] = useSetState(
    useLocationStore.getInitialState(),
  );

  const submitLocationState = useLocationStore((state) => state.setLocation);
  const submitLocation = () => {
    submitLocationState(location);
  };

  return { form, query, collection, setLocation, submitLocation };
}
