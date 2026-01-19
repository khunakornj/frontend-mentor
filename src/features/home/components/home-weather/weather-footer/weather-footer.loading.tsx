import spinnerUrl from '@assets/spinner.svg';
import * as R from 'remeda';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';
import myDayjs from '@/shared/libs/dayjs';

import style from './weather-footer.module.scss';

function WeatherFooterLoading() {
  const data = R.pipe(
    R.range(0, 7),
    R.map((offset) => {
      const date = myDayjs().add(offset, 'day');
      return {
        label: date.format('ddd'),
        value: { valueLeft: '-', valueRight: '-' },
      };
    }),
  );

  return (
    <div className={style.root}>
      <h4 className={style.heading}>Daily Forecast</h4>
      <ul className={style.cardSection}>
        {data.map((v, i) => (
          <li className={style.card} key={i}>
            <p>{v.label}</p>
            <div className={style.spinnerContainer}>
              <ImageWrapper
                src={spinnerUrl}
                alt="overcast"
                className={style.spinner}
              />
            </div>
            <div className={style.cardValue}>
              <p>{v.value.valueLeft}°</p>
              <p>{v.value.valueRight}°</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherFooterLoading;
