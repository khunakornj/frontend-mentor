import style from './left-card.module.css';
import MidSection from './mid-section/mid-section';
import TopSection from './top-section/top-section';

function LeftCard() {
  return (
    <div className={style.container}>
      <TopSection />
      <MidSection />
    </div>
  );
}

export default LeftCard;
