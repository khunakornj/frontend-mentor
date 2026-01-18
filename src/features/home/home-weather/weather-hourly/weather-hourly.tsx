import overcast from '@assets/overcast.svg';

import SingleDropdown from '@/components/presentation/single-dropdown/single-dropdown';
import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';

import { useWeatherHourly } from './weather-hourly.hooks';
import style from './weather-hourly.module.scss';

function WeatherHourly() {
  const { data } = useWeatherHourly();

  return (
    <div className={style.root}>
      <div className={style.heading}>
        <h2 className={style.headingText}>Hourly forecast</h2>
        <SingleDropdown items={[{ label: 'Monday', value: 'monday' }]} />
      </div>

      <ul className={style.weather}>
        {data.map((v, i) => (
          <li className={style.weatherCard} key={i}>
            <ImageWrapper className={style.img} src={overcast} alt="cloud" />
            <h4 className={style.timeText}>{v.timeText}</h4>
            <span className={style.degreeText}>{v.value}°</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherHourly;
