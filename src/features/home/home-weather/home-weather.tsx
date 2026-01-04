import style from './home-weather.module.scss';
import WeatherFooter from './weather-footer/weather-footer';
import WeatherHourly from './weather-hourly/weather-hourly';
import WeatherMain from './weather-main/weather-main';
import WeatherMid from './weather-mid/weather-mid';
import WeatherSearch from './weather-search/weather-search';

function HomeWeather() {
  return (
    <div className={style.root}>
      <section className={style.search}>
        <WeatherSearch />
      </section>

      <section className={style.main}>
        <WeatherMain />
      </section>

      <section className={style.mid}>
        <WeatherMid />
      </section>

      <section className={style.footer}>
        <WeatherFooter />
      </section>

      <section className={style.side}>
        <WeatherHourly />
      </section>
    </div>
  );
}

export default HomeWeather;
