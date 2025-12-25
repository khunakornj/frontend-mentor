import Button from '@/shared/components/button/button';

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
        <Button buttonType="primary" text="Log today's mood" />
      </div>

      <SectionBottom className={style.sectionBottom} />
    </div>
  );
}

export default IndexPage;
