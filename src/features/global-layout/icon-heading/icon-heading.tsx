import logo from '@shared/assets/logo-1.svg';
import ImageWrapper from '@shared/component-utils/image/image';
import UiTabs from '@shared/components/ui-tabs/ui-tabs';

import style from './icon-heading.module.css';

function IconHeading() {
  return (
    <div className={style.root}>
      <ImageWrapper src={logo} alt="logo" className={style.img} />
      <UiTabs
        items={[
          { value: 'study', label: 'Study Mode' },
          { value: 'all', label: 'All Cards' },
        ]}
      />
    </div>
  );
}

export default IconHeading;
