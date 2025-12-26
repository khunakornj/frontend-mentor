import * as Check from '@radix-ui/react-checkbox';
import checkIconUrl from '@shared/assets/check-icon.svg';

import ImageWrapper from '@/shared/ui/image-wrapper/imageWrapper';

import style from './checkbox.module.css';

function CheckIcon() {
  return (
    <div
      style={{
        width: '85%',
        height: '85%',
        marginTop: '2px',
      }}
    >
      <ImageWrapper src={checkIconUrl} alt="check-icon" />
    </div>
  );
}

type Props = {
  label?: string;
  value: string;
  onCheck?: (val: { value: string; checked: boolean }) => void;
} & Check.CheckboxProps;

function Checkbox({ label, value, onCheck, ...props }: Props) {
  return (
    <Check.Root
      className={style.container}
      onCheckedChange={(checked) => {
        onCheck?.({ value, checked: Boolean(checked) });
      }}
      {...props}
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
