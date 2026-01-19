import { useQuery } from '@tanstack/react-query';
import { useShallow } from 'zustand/react/shallow';

import { useCurrentWeatherApiOptions } from '@/features/home/hooks/use-weather-api';
import { useUnitStore } from '@/features/home/stores/unit-store';

export function useWeatherMid() {
  console.log('testest');

  const { windSpeed, precipitation } = useUnitStore(
    useShallow((state) => ({
      windSpeed: state.windSpeed,
      precipitation: state.precipitation,
    })),
  );

  const query = useQuery({
    ...useCurrentWeatherApiOptions(),
    select: ({ current }) => [
      {
        label: 'Feels Like',
        value: `${Math.round(current.temperature_2m)}°`,
      },
      {
        label: 'Humidity',
        value: `${Math.round(current.relative_humidity_2m)}%`,
      },
      {
        label: 'Wind',
        value: `${Math.round(current.wind_speed_10m)} ${windSpeed}`,
      },
      {
        label: 'Precipitation',
        value: `${Math.round(current.precipitation)} ${precipitation}`,
      },
    ],
  });

  const data = query.data
    ? query.data
    : [
        {
          label: 'Feels Like',
          value: '--°',
        },
        {
          label: 'Humidity',
          value: '--%',
        },
        {
          label: 'Wind',
          value: `-- ${windSpeed}`,
        },
        {
          label: 'Precipitation',
          value: `-- ${precipitation}`,
        },
      ];

  return {
    data,
  };
}
