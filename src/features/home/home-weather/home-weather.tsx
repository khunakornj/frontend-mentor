import style from './home-weather.module.scss';
import WeatherFooter from './weather-footer/weather-footer';
import WeatherMain from './weather-main/weather-main';
import WeatherMid from './weather-mid/weather-mid';

function HomeWeather() {
  return (
    <div className={style.root}>
      <WeatherMain className={style.main} />
      <WeatherMid className={style.mid} />
      <WeatherFooter className={style.footer} />
    </div>
  );
}

export default HomeWeather;
