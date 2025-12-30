import shuffleIcon from '@shared/assets/shuffle.svg';
import ButtonSide from '@shared/components/button-side/button-side';
import UiCheckbox from '@shared/components/ui-checkbox/ui-checkbox';
import UiSelect from '@shared/components/ui-select/ui-select';

import style from './top-section.module.css';

function TopSection() {
  return (
    <div className={style.container}>
      <UiSelect items={[{ value: 'nice' }]} />
      <UiCheckbox label="Hide Mastered" className={style.checkbox} />
      <ButtonSide iconLeftUrl={shuffleIcon} label="Shuffle" />
    </div>
  );
}

export default TopSection;
