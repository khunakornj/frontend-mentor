import { queryOptions } from '@tanstack/react-query';

import { fetcher, validateAndGetApiData } from '@/shared/libs/fetcher';

import type { ApiResponse, Query } from './search-countries.type';

export function getSearchCountriesQueryOptions(opts: Query) {
  return queryOptions({
    queryKey: ['countries', opts.params],
    queryFn: async () => {
      const url = 'https://geocoding-api.open-meteo.com/v1/search';
      const res = await fetcher(url, 'GET', {
        params: opts.params,
      });

      return validateAndGetApiData<ApiResponse>(res);
    },
  });
}
