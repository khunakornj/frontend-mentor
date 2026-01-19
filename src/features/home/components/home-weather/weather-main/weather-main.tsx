import { useSuspenseQuery } from '@tanstack/react-query';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';
import { useCurrentWeatherApiOptions } from '@/features/home/hooks/use-weather-api';
import { useLocationStore } from '@/features/home/stores/location-store';
import myDayjs from '@/shared/libs/dayjs';
import { getWeatherInfo } from '@/shared/libs/weather';

import style from './weather-main.module.scss';

function WeatherMain() {
  const country = useLocationStore((state) => state.country);
  const { data } = useSuspenseQuery({
    ...useCurrentWeatherApiOptions(),
    select: (data) => ({
      timeDisplay: myDayjs(data.current.time).format('dddd, MMM D, YYYY'),
      temperature: Math.floor(data.current.temperature_2m),
      weatherCode: data.current.weathercode,
    }),
  });

  const weatherInfo = getWeatherInfo(data.weatherCode);

  return (
    <div className={style.root}>
      <section>
        <h3 className={style.top}>{country}</h3>
        <p className={style.bottom}>{data.timeDisplay}</p>
      </section>

      <section className={style.rightSection}>
        <ImageWrapper
          src={weatherInfo.weatherIcon}
          className={style.img}
          alt="weather"
        />
        <h3 className={style.right}>{data.temperature}°</h3>
      </section>
    </div>
  );
}

export default WeatherMain;
