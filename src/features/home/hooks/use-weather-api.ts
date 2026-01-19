import { useShallow } from 'zustand/react/shallow';

import { useUnitStore } from '@/features/home/stores/unit-store';
import { getSearchWeatherQueryOptions } from '@/shared/api/search-weather/search-weather';

import { useLocationStore } from '../stores/location-store';
function useWeatherApiParams() {
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

  return {
    latitude: locationStore.latitude,
    longitude: locationStore.longtitude,

    // store
    windSpeed: store.windSpeed,
    temperature: store.temperature,
    precipitation: store.precipitation,
  };
}

export function useCurrentWeatherApiOptions() {
  return getSearchWeatherQueryOptions('current', {
    params: useWeatherApiParams(),
  });
}

export function useHourlyForecastWeatherApiOptions() {
  return getSearchWeatherQueryOptions('hourly-forecast', {
    params: useWeatherApiParams(),
  });
}

export function useDailyForecastWeatherApiOptions() {
  return getSearchWeatherQueryOptions('daily-forecast', {
    params: useWeatherApiParams(),
  });
}
