import ImageWrapper from '@shared/component-utils/image/image';
import { forwardRef } from 'react';

import style from './button-side.module.css';

type Props = {
  label?: string;
  onClick?: () => void;
  iconLeftUrl?: string;
  iconRightUrl?: string;
};

const ButtonSide = forwardRef(
  (
    {
      label = 'placeholder',
      onClick,
      iconLeftUrl,
      iconRightUrl,
      ...props
    }: Props,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      className={style.base}
      onClick={() => {
        onClick?.();
      }}
      {...props}
    >
      {iconLeftUrl && (
        <ImageWrapper
          src={iconLeftUrl}
          alt="angle-left"
          className={style.img}
        />
      )}
      <label className={style.label}>{label}</label>
      {iconRightUrl && (
        <ImageWrapper
          src={iconRightUrl}
          alt="angle-right"
          className={style.img}
        />
      )}
    </button>
  ),
);

export default ButtonSide;
