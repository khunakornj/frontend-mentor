import style from './home-page.module.scss';
import HomeTitle from './home-title/home-title';
import HomeWeather from './home-weather/home-weather';

function HomePage() {
  return (
    <div className={style.root}>
      <HomeTitle />
      <HomeWeather />
    </div>
  );
}

export default HomePage;
