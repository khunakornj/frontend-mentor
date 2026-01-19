import { useSuspenseQuery } from '@tanstack/react-query';
import { map } from 'remeda';

import { useDailyForecastWeatherApiOptions } from '@/features/home/hooks/use-weather-api';
import myDayjs from '@/shared/libs/dayjs';
import { getWeatherInfo } from '@/shared/libs/weather';

type WeatherData = {
  label: string;
  weatherIcon: string;
  value: {
    valueLeft: number;
    valueRight: number;
  };
};

export function useWeatherFooter() {
  const { data } = useSuspenseQuery({
    ...useDailyForecastWeatherApiOptions(),
    select: (res) =>
      map(res.daily.time, (time, index) => {
        const temperatureMin = res.daily.temperature_2m_min[index]!;
        const temperatureMax = res.daily.temperature_2m_max[index]!;
        const weatherCode = res.daily.weathercode[index]!;
        const weatherInfo = getWeatherInfo(weatherCode);

        const datum: WeatherData = {
          label: myDayjs(time).format('ddd'),
          weatherIcon: weatherInfo.weatherIcon,
          value: {
            valueLeft: Math.floor(temperatureMax),
            valueRight: Math.floor(temperatureMin),
          },
        };

        return datum;
      }),
  });

  return { data };
}
