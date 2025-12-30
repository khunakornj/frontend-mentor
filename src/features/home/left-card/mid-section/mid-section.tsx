import ButtonMain from '@shared/components/button-main/button-main';
import ProgressBar from '@shared/components/progress-bar/progress-bar';

import style from './mid-section.module.css';

function MidSection() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <ButtonMain
          className={style.button}
          hideIcon={true}
          label="Web Development"
          intent={'secondary'}
        />

        <div className={style.textSection}>
          <h2 className={style.textHeading}>What does HTML stand for?</h2>
          <h4 className={style.textDescription}>Click to reveal answer</h4>
        </div>

        <div className={style.progressSection}>
          <ProgressBar className={style.progressBar} value={1} maxValue={5} />
          <label htmlFor="progress" className={style.progressLabel}>
            1/5
          </label>
        </div>
      </div>
    </div>
  );
}

export default MidSection;
