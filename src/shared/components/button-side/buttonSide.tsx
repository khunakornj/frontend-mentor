import angleRightUrl from '@shared/assets/angle-right.svg';
import { Label } from 'radix-ui';

import { presentIf } from '@/shared/libs/utils';
import ImageWrapper from '@/shared/ui/image-wrapper/imageWrapper';

import style from './buttonSide.module.css';

type Props = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

function ButtonSide({ label, onClick, ...props }: Props) {
  return (
    <button className={style.container} {...props} onClick={onClick}>
      <Icon inverse={true} />
      <Label.Root className={style.text}>{label || 'placeholder'}</Label.Root>
      <Icon />
    </button>
  );
}

export default ButtonSide;

function Icon({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={style.icon} data-inverse={presentIf(inverse)}>
      <ImageWrapper src={angleRightUrl} alt="icon" />
    </div>
  );
}
