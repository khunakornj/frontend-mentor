import { useSuspenseQuery } from '@tanstack/react-query';

import { useCurrentWeatherApiOptions } from '@/features/home/hooks/use-weather-api';
import { useLocationStore } from '@/features/home/stores/location-store';
import myDayjs from '@/shared/libs/dayjs';

import style from './weather-main.module.scss';

function WeatherMain() {
  const country = useLocationStore((state) => state.country);
  const { data } = useSuspenseQuery({
    ...useCurrentWeatherApiOptions(),
    select: (data) => ({
      timeDisplay: myDayjs(data.current.time).format('dddd, MMM D, YYYY'),
      temperature: Math.floor(data.current.temperature_2m),
    }),
  });

  return (
    <div className={style.root}>
      <section>
        <h3 className={style.top}>{country}</h3>
        <p className={style.bottom}>{data.timeDisplay}</p>
      </section>
      <h3 className={style.right}>{data.temperature}°</h3>
    </div>
  );
}

export default WeatherMain;
