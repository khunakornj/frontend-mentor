import style from './home-page.module.scss';
import HomeWeather from './home-weather/home-weather';

function HomePage() {
  return (
    <div className={style.root}>
      <HomeWeather />
    </div>
  );
}

export default HomePage;
