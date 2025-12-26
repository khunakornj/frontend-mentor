import circlePlusUrl from '@shared/assets/circle-plus.svg';
import undoAltUrl from '@shared/assets/undo-alt.svg';
import { Label } from 'radix-ui';

import ImageWrapper from '@/shared/ui/image-wrapper/imageWrapper';

import style from './buttonMain.module.css';

type ButtonType = 'primary' | 'secondary';
type Props = {
  buttonType?: ButtonType;
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
};

function ButtonMain({
  buttonType = 'primary',
  label,
  onClick,
  ...props
}: Props) {
  return (
    <button
      className={style.container}
      data-state={buttonType}
      onClick={onClick}
      {...props}
    >
      <Icon buttonType={buttonType} />
      <Label.Root className={style.text}>{label || 'placeholder'}</Label.Root>
    </button>
  );
}

export default ButtonMain;

function Icon({ buttonType }: { buttonType: ButtonType }) {
  return (
    <div className={style.icon}>
      <ImageWrapper
        src={buttonType === 'primary' ? circlePlusUrl : undoAltUrl}
        alt="icon"
      />
    </div>
  );
}
