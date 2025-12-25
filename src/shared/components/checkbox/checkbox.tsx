import * as Check from '@radix-ui/react-checkbox';
import checkIconUrl from '@shared/assets/check-icon.svg';

import ImageWrapper from '@/shared/ui/image-wrapper/imageWrapper';

import style from './checkbox.module.css';

function CheckIcon() {
  return (
    <div
      style={{
        width: '75%',
        height: '75%',
      }}
    >
      <ImageWrapper src={checkIconUrl} alt="check-icon" />
    </div>
  );
}

type Props = {
  label?: string;
  value: string;
  onClick?: (val: string) => void;
};

function Checkbox({ label, value, onClick }: Props) {
  return (
    <Check.Root
      className={style.container}
      onClick={onClick ? () => onClick(value) : undefined}
    >
      <div className={style.checkContainer}>
        <Check.Indicator className={style.checkHighlight}>
          <CheckIcon />
        </Check.Indicator>
      </div>
      <label htmlFor="checkbox" className={style.label}>
        {label ?? value}
      </label>
    </Check.Root>
  );
}

export default Checkbox;
