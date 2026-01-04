import overcastUrl from '@assets/overcast.svg';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';

import { useWeatherFooter } from './weather-footer.hooks';
import style from './weather-footer.module.scss';

function WeatherFooter() {
  const { data } = useWeatherFooter();

  return (
    <div className={style.root}>
      <h4 className={style.heading}>Daily Forecast</h4>
      <ul className={style.cardSection}>
        {data.map((v, i) => (
          <li className={style.card} key={i}>
            <p>{v.label}</p>
            <ImageWrapper src={overcastUrl} alt="overcast" />
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

export default WeatherFooter;
