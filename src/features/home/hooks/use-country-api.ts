import { getSearchCountriesQueryOptions } from '@/shared/api/search-countries/search-countries';

type CountryApiOptions = {
  name: string;
};
export function useHomePageCountryApiOptions(opts: CountryApiOptions) {
  return getSearchCountriesQueryOptions({
    params: {
      count: 10,
      name: opts.name,
    },
  });
}
