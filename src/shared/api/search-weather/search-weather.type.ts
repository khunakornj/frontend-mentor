import type {
  Precipitation,
  Temperature,
  WindSpeed,
} from '@/shared/common/types';

export type WeatherSearchType =
  | 'daily-forecast'
  | 'hourly-forecast'
  | 'current';

export type Query = {
  params: {
    latitude: number;
    longitude: number;
    windSpeed?: WindSpeed;
    temperature?: Temperature;
    precipitation?: Precipitation;
    currentWeather?: boolean;
  };
};

export type ApiParams = {
  latitude: number;
  longitude: number;
  current_weather?: boolean;
  temperature_unit?: string;
  wind_speed_unit?: string;
  precipitation_unit?: string;
  daily?: string;
  hourly?: string;
  forecast_hours?: number;
  forecast_days?: number;
};

export type ApiResponseBase = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
};

export type ApiResponseCurrent = ApiResponseBase & {
  current_weather_units: {
    time: string;
    interval: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    is_day: string;
    weathercode: string;
  };
  current_weather: {
    time: string;
    interval: number;
    temperature: number;
    windspeed: number;
    winddirection: number;
    is_day: number;
    weathercode: number;
  };
};

export type ApiResponseHourlyForecast = ApiResponseBase & {
  hourly: {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    windspeed_10m: number[];
    weathercode: number[];
  }[];
};

export type ApiResponseDailyForecast = ApiResponseBase & {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    precipitation_sum: number[];
    weathercode: number[];
    relative_humidity_2m_mean: number[];
    wind_speed_10m_max: number[];
  };
};
export type ApiResponse =
  | ApiResponseCurrent
  | ApiResponseHourlyForecast
  | ApiResponseDailyForecast;
