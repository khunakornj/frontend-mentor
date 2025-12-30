import { Checkbox } from '@ark-ui/react';
import checkIcon from '@shared/assets/check.svg';
import ImageWrapper from '@shared/component-utils/image/image';
import clsx from 'clsx';
import { forwardRef } from 'react';

import style from './ui-checkbox.module.css';

type Props = {
  onCheck?: (check: boolean) => void;
  className?: string;
  label?: string;
};

const UiCheckbox = forwardRef(
  (
    { onCheck, className, label, ...props }: Props,
    ref: React.ForwardedRef<HTMLLabelElement>,
  ) => {
    return (
      <Checkbox.Root
        ref={ref}
        className={clsx(style.root, className)}
        onCheckedChange={(check) => {
          onCheck?.(Boolean(check.checked));
        }}
        {...props}
      >
        <Checkbox.Control className={style.indicator}>
          <Checkbox.Indicator className={style.indicatorSelect}>
            <ImageWrapper
              className={style.img}
              src={checkIcon}
              alt="check-icon"
            />
          </Checkbox.Indicator>
        </Checkbox.Control>
        {label && (
          <Checkbox.Label className={style.label}>{label}</Checkbox.Label>
        )}
        <Checkbox.HiddenInput />
      </Checkbox.Root>
    );
  },
);

export default UiCheckbox;
