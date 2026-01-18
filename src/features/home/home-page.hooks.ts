import { getSearchCountriesQueryOptions } from '@/shared/api/search-countries/search-countries';
import { getSearchWeatherQueryOptions } from '@/shared/api/search-weather/search-weather';
import { useUnitStore } from '@/shared/store/unit-store';

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

export type WeatherApiOptions = {
  latitude?: number;
  longitude?: number;
};
function useWeatherApiParams(opts: WeatherApiOptions) {
  // default bangkok
  opts.latitude ??= 13.75;
  opts.longitude ??= 100.5;

  const store = useUnitStore((state) => ({
    temperature: state.temperature,
    windSpeed: state.windSpeed,
    precipitation: state.precipitation,
  }));

  return {
    latitude: opts.latitude,
    longitude: opts.longitude,

    // store
    windSpeed: store.windSpeed,
    temperature: store.temperature,
    precipitation: store.precipitation,
  };
}

export function useCurrentWeatherApiOptions(opts: WeatherApiOptions) {
  return getSearchWeatherQueryOptions('current', {
    params: useWeatherApiParams(opts),
  });
}

export function useHourlyForecastWeatherApiOptions(opts: WeatherApiOptions) {
  return getSearchWeatherQueryOptions('hourly-forecast', {
    params: useWeatherApiParams(opts),
  });
}

export function useDailyForecastWeatherApiOptions(opts: WeatherApiOptions) {
  return getSearchWeatherQueryOptions('daily-forecast', {
    params: useWeatherApiParams(opts),
  });
}
