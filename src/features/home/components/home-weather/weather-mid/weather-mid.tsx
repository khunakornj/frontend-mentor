import { useWeatherMid } from './use-weather-mid';
import style from './weather-mid.module.scss';

function WeatherMid() {
  const { data } = useWeatherMid();

  return (
    <div className={style.root}>
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
