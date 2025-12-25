import patternUrl from '@shared/assets/pattern.svg';

import { CARD_LEFT_DATA } from './cardLeft.data';
import style from './cardLeft.module.css';

function CardLeft() {
  return (
    <div className={style.cardLeft}>
      {CARD_LEFT_DATA.map((datum) => (
        <div className={style.titleBox} key={datum.id}>
          <div className={style.textSection}>
            <h4 className={style.heading}>{datum.title.heading}</h4>
            <p className={style.details}>{datum.title.details}</p>
          </div>

          <div className={style.boxSection}>
            <img
              className={style.patternImage}
              src={patternUrl}
              alt="pattern"
            />
            <h4 className={style.heading}>{datum.card.heading}</h4>
            <p className={style.details}>{datum.card.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardLeft;
