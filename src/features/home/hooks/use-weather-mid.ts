export function useWeatherMid() {
  const data = [
    {
      label: 'Feels Like',
      value: 18,
    },
    {
      label: 'Humidity',
      value: 46,
    },
    {
      label: 'Wind',
      value: 14,
    },
    {
      label: 'Precipitation',
      value: 0,
    },
  ];

  return { data };
}
