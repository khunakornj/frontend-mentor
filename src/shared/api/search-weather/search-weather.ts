import { queryOptions } from '@tanstack/react-query';
import { match } from 'ts-pattern';

import { fetcher, validateAndGetApiData } from '@/shared/libs/fetcher';

import type {
  ApiParams,
  ApiResponse,
  ApiResponseCurrent,
  ApiResponseDailyForecast,
  ApiResponseHourlyForecast,
  Query,
  WeatherSearchType,
} from './search-weather.type';

// Overloads: Define the specific return types for each SearchType
export function getSearchWeatherQueryOptions(
  type: 'current',
  opts: Query,
): ReturnType<typeof queryOptions<ApiResponseCurrent>>;

export function getSearchWeatherQueryOptions(
  type: 'hourly-forecast',
  opts: Query,
): ReturnType<typeof queryOptions<ApiResponseHourlyForecast>>;

export function getSearchWeatherQueryOptions(
  type: 'daily-forecast',
  opts: Query,
): ReturnType<typeof queryOptions<ApiResponseDailyForecast>>;

// Implementation
export function getSearchWeatherQueryOptions(
  type: WeatherSearchType,
  opts: Query,
): unknown {
  return queryOptions({
    queryKey: ['weather', opts.params] as const,
    queryFn: async () => {
      const url = 'https://api.open-meteo.com/v1/forecast';
      const params: ApiParams = {
        latitude: opts.params.latitude,
        longitude: opts.params.longitude,
        temperature_unit: opts.params.windSpeed,
        wind_speed_unit: opts.params.temperature,
        precipitation_unit: opts.params.precipitation,
      };

      match(type)
        .with('current', () => {
          params.current_weather = true;
        })
        .with('daily-forecast', () => {
          params.daily =
            'temperature_2m_max,precipitation_sum,weathercode,relative_humidity_2m_mean,wind_speed_10m_max';
          params.forecast_days = 7;
        })
        .with('hourly-forecast', () => {
          params.hourly =
            'temperature_2m,relative_humidity_2m,windspeed_10m,weathercode';
          params.forecast_hours = 8;
        });

      const res = await fetcher(url, 'GET', { params });

      return validateAndGetApiData<ApiResponse>(res);
    },
  });
}
