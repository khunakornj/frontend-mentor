import { Button } from '@base-ui/react/button';
import angleLeft from '@shared/assets/angle-left.svg';
import angleRight from '@shared/assets/angle-right.svg';
import ImageWrapper from '@shared/component-utils/image/image';
import { forwardRef } from 'react';

import style from './button-side.module.css';

type Props = {
  label?: string;
  onClick?: () => void;
};

const ButtonSide = forwardRef(
  (
    { label = 'placeholder', onClick, ...props }: Props,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => (
    <Button
      ref={ref}
      className={style.base}
      onClick={() => {
        onClick?.();
      }}
      {...props}
    >
      <ImageWrapper src={angleLeft} alt="angle-left" className={style.img} />
      <label className={style.label}>{label}</label>
      <ImageWrapper src={angleRight} alt="angle-right" className={style.img} />
    </Button>
  ),
);

export default ButtonSide;
