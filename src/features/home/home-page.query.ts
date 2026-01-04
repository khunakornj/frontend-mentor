import { getSearchCountriesQueryOptions } from '@/shared/api/search-countries/search-countries';

export const HOME_PAGE_QUERY = {
  countryDropdown: (opts: { name: string }) =>
    getSearchCountriesQueryOptions({
      params: {
        count: 10,
        name: opts.name,
      },
    }),
};
