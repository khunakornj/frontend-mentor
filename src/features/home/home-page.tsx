import HomeWeather from './components/home-weather/home-weather';
import style from './home-page.module.scss';

function HomePage() {
  return (
    <div className={style.root}>
      <HomeWeather />
    </div>
  );
}

export default HomePage;
