import style from './weather-main.module.scss';

function WeatherMain() {
  return (
    <div className={style.root}>
      <section>
        <h3 className={style.top}>Berlin, Germany</h3>
        <p className={style.bottom}>Tuesday, Aug 5, 2025</p>
      </section>
      <h3 className={style.right}>20°</h3>
    </div>
  );
}

export default WeatherMain;
