type HourlyData = {
  timeText: string;
  value: number;
};

export function useWeatherHourly() {
  const data: HourlyData[] = [
    {
      timeText: '3 pm',
      value: 20,
    },
    {
      timeText: '4 pm',
      value: 30,
    },
    {
      timeText: '5 pm',
      value: 11,
    },
    {
      timeText: '6 pm',
      value: 90,
    },
    {
      timeText: '7 pm',
      value: 18,
    },
    {
      timeText: '8 pm',
      value: 20,
    },
    {
      timeText: '9 pm',
      value: 20,
    },
    {
      timeText: '10 pm',
      value: 20,
    },
  ];

  return { data };
}
