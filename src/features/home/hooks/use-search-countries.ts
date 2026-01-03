import { useQuery } from '@tanstack/react-query';

import { getSearchCountriesQueryOptions } from '@/shared/api/search-countries/search-countries';

type UseSearchCountriesOptions = {
  name: string;
};

export function getSearchCountriesDropdownOptions({
  name,
}: UseSearchCountriesOptions) {
  const count = 20;

  return getSearchCountriesQueryOptions({
    params: {
      name,
      count,
    },
  });
}

export function useSearchCountriesDropdown(opts: UseSearchCountriesOptions) {
  useQuery({
    ...getSearchCountriesDropdownOptions(opts),
    select: (data) => {
      return data.results.map((result) => ({
        label: result.name,
        value: {
          latitude: result.latitude,
          longtitude: result.longitude,
        },
      }));
    },
  });
}
