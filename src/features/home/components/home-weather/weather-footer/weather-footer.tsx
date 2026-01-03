import clsx from 'clsx';

import { useWeatherFooter } from '@/features/home/hooks/use-weather-footer';

import style from './weather-footer.module.scss';

type Props = {
  className?: string;
};

function WeatherFooter({ className }: Props) {
  const { data } = useWeatherFooter();

  return (
    <div className={clsx(style.root, className)}>
      <h4 className={style.heading}>Daily Forecast</h4>
      <ul className={style.cardSection}>
        {data.map((v, i) => (
          <li className={style.card} key={i}>
            <p>{v.label}</p>
            <p>{v.weather}</p>
            <div className={style.cardValue}>
              <p>{v.value.valueLeft}</p>
              <p>{v.value.valueRight}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherFooter;
