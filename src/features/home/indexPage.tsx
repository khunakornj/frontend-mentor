import Button from '@/shared/components/button/button';

import LogMoodModal from './components/log-mood-modal/logMoodModal';
import SectionBottom from './components/section-bottom/sectionBottom';
import SectionTitle from './components/section-title/sectionTitle';
import SectionTop from './components/section-top/sectionTop';
import style from './indexPage.module.css';

function IndexPage() {
  return (
    <div className={style.container}>
      <SectionTop className={style.sectionTop} />
      <SectionTitle className={style.sectionTitle} />

      <div className={style.sectionMoodButton}>
        <LogMoodModal>
          <Button buttonType="primary" text="Log today's mood" />
        </LogMoodModal>
      </div>

      <SectionBottom className={style.sectionBottom} />
    </div>
  );
}

export default IndexPage;
