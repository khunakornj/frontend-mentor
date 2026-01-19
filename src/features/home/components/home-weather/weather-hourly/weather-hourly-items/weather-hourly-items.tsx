import { useSuspenseQuery } from '@tanstack/react-query';
import * as R from 'remeda';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';
import { useHourlyForecastWeatherApiOptions } from '@/features/home/hooks/use-weather-api';
import myDayJs from '@/shared/libs/dayjs';
import { getWeatherInfo } from '@/shared/libs/weather';

import type { HourlyData } from '../weather-hourly.hooks';
import { displayHour } from '../weather-hourly.utils';
import style from './weather-hourly-items.module.scss';

type Props = {
  selectDay: string;
};
function WeatherHourlyItems({ selectDay }: Props) {
  const { data } = useSuspenseQuery({
    ...useHourlyForecastWeatherApiOptions({ focusDate: selectDay }),
    select: (res) =>
      R.map(res.hourly.time, (timeStr, index) => {
        const temperature = res.hourly.temperature_2m[index];
        const weatherCode = res.hourly.weathercode[index];

        const data: HourlyData = {
          temperature,
          weatherCode,
          time: myDayJs(timeStr),
        };

        return data;
      }),
  });

  return (
    <ul className={style.weather}>
      {data.map((v, i) => {
        const { weatherIcon } = getWeatherInfo(v.weatherCode);

        return (
          <li className={style.weatherCard} key={i}>
            <ImageWrapper className={style.img} src={weatherIcon} alt="cloud" />
            <h4 className={style.timeText}>{displayHour(v.time)}</h4>
            <span className={style.degreeText}>{v.temperature}°</span>
          </li>
        );
      })}
    </ul>
  );
}

export default WeatherHourlyItems;
