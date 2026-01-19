import { useShallow } from 'zustand/react/shallow';

import { useUnitStore } from '@/features/home/stores/unit-store';
import { getSearchWeatherQueryOptions } from '@/shared/api/search-weather/search-weather';
import type { Query } from '@/shared/api/search-weather/search-weather.type';

import { useLocationStore } from '../stores/location-store';

type Props = {
  focusDate?: string;
};
function useWeatherApiParams(props?: Props) {
  const store = useUnitStore(
    useShallow((state) => ({
      temperature: state.temperature,
      windSpeed: state.windSpeed,
      precipitation: state.precipitation,
    })),
  );

  const locationStore = useLocationStore(
    useShallow((state) => ({
      latitude: state.latitude,
      longtitude: state.longtitude,
      country: state.country,
    })),
  );

  const params: Query['params'] = {
    latitude: locationStore.latitude,
    longitude: locationStore.longtitude,

    // store
    windSpeed: store.windSpeed,
    temperature: store.temperature,
    precipitation: store.precipitation,
    focusDate: props?.focusDate,
  };

  return params;
}

export function useCurrentWeatherApiOptions() {
  return getSearchWeatherQueryOptions('current', {
    params: useWeatherApiParams(),
  });
}

export function useHourlyForecastWeatherApiOptions(props?: Props) {
  return getSearchWeatherQueryOptions('hourly-forecast', {
    params: useWeatherApiParams(props),
  });
}

export function useDailyForecastWeatherApiOptions() {
  return getSearchWeatherQueryOptions('daily-forecast', {
    params: useWeatherApiParams(),
  });
}
