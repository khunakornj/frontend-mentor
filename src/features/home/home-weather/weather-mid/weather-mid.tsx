import clsx from 'clsx';

import { useWeatherMid } from './weather-mid.hooks';
import style from './weather-mid.module.scss';

type Props = {
  className?: string;
};

function WeatherMid({ className }: Props) {
  const { data } = useWeatherMid();

  return (
    <div className={clsx(style.root, className)}>
      {data.map((v, i) => (
        <div key={i} className={style.card}>
          <h4 className={style.cardLabel}>{v.label}</h4>
          <span className={style.cardValue}>{v.value}</span>
        </div>
      ))}
    </div>
  );
}

export default WeatherMid;
