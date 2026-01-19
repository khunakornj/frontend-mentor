import spinner from '@assets/spinner.svg';
import * as R from 'remeda';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';
import myDayJs from '@/shared/libs/dayjs';

import { displayHour } from '../weather-hourly.utils';
import style from './weather-hourly-items.module.scss';

function WeatherHourlyItemsLoading() {
  const data = R.pipe(
    R.range(0, 8),
    R.map((offset) => myDayJs().add(offset, 'hours')),
  );

  return (
    <ul className={style.weather}>
      {data.map((v, i) => {
        return (
          <li className={style.weatherCard} key={i}>
            <div className={style.spinnerContainer}>
              <ImageWrapper
                className={style.spinner}
                src={spinner}
                alt="cloud"
              />
            </div>
            <h4 className={style.timeText}>{displayHour(v)}</h4>
            <span className={style.degreeText}>--°</span>
          </li>
        );
      })}
    </ul>
  );
}

export default WeatherHourlyItemsLoading;
