import style from './index-page.module.css';
import LeftCard from './left-card/left-card';
import RightCard from './right-card/right-card';

function IndexPage() {
  return (
    <div className={style.container}>
      <LeftCard />
      <RightCard />
    </div>
  );
}

export default IndexPage;
