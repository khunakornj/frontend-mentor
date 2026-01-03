import overcast from '@assets/overcast.svg';

import SingleDropdown from '@/components/presentation/single-dropdown/single-dropdown';
import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';
import { useWeatherHourly } from '@/features/home/hooks/use-weather-hourly';
import { collection } from '@/shared/common/func';

import style from './weather-hourly.module.scss';

function WeatherHourly() {
  const { data } = useWeatherHourly();
  const dropdownCollection = collection({
    items: [{ label: 'Monday', value: 'monday' }],
    itemToString: (v) => v.label,
    itemToValue: (v) => v.value,
  });

  return (
    <div className={style.root}>
      <div className={style.heading}>
        <h2 className={style.headingText}>Hourly forecast</h2>
        <SingleDropdown collection={dropdownCollection} />
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
