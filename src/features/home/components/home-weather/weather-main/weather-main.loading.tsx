import style from './weather-main.module.scss';

function WeatherMainLoad() {
  return (
    <div className={style.root}>
      <section>
        <h3 className={style.top}>--</h3>
        <p className={style.bottom}>--</p>
      </section>
      <h3 className={style.right}>--°</h3>
    </div>
  );
}

export default WeatherMainLoad;
