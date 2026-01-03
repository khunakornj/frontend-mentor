import { queryOptions } from '@tanstack/react-query';

import { fetcher } from '@/shared/libs/fetcher';

type Options = {
  params: {
    name: string;
    count: number;
  };
};

export type Response = {
  results: {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    feature_code: string;
    country_code: string;
    admin1_id: number;
    admin2_id?: number;
    admin3_id?: number;
    timezone: string;
    country_id: number;
    country: string;
    admin1: string;
    admin2?: string;
    admin3?: string;
    population?: number;
  }[];
  generationtime_ms: number;
};

async function searchCountries({ params }: Options) {
  const url = 'https://geocoding-api.open-meteo.com/v1/search';

  const res = await fetcher(url, 'GET', {
    params,
  });

  const data: Response = await res.json();

  return data;
}

export function getSearchCountriesQueryOptions(opts: Options) {
  return queryOptions({
    queryKey: ['countries', opts],
    queryFn: async () => {
      const data = await searchCountries(opts);
      return data;
    },
  });
}
