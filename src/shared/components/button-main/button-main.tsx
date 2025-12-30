import plusIcon from '@shared/assets/circle-plus.svg';
import undoIcon from '@shared/assets/undo-alt.svg';
import ImageWrapper from '@shared/component-utils/image/image';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import style from './button-main.module.css';

const button = cva(style.base, {
  variants: {
    intent: {
      primary: style.primary,
      secondary: style.secondary,
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

type Props = {
  label?: string;
  onClick?: () => void;
} & VariantProps<typeof button>;

const ButtonMain = forwardRef(
  (
    { onClick, intent = 'primary', label, ...props }: Props,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      {...props}
      className={button({ intent })}
      onClick={() => {
        onClick?.();
      }}
    >
      <ImageWrapper
        src={intent === 'primary' ? plusIcon : undoIcon}
        alt="plus-icon"
        className={style.img}
      />
      <label className={style.label}>{label || 'placeholder'}</label>
    </button>
  ),
);

export default ButtonMain;
