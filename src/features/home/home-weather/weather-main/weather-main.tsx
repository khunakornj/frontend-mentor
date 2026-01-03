import clsx from 'clsx';

import style from './weather-main.module.scss';

type Props = {
  className?: string;
};

function WeatherMain({ className }: Props) {
  return (
    <div className={clsx(style.root, className)}>
      <section>
        <h3 className={style.top}>Berlin, Germany</h3>
        <p className={style.bottom}>Tuesday, Aug 5, 2025</p>
      </section>
      <h3 className={style.right}>20°</h3>
    </div>
  );
}

export default WeatherMain;
