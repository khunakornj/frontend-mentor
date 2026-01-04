import spinnerUrl from '@assets/spinner.svg';
import clsx from 'clsx';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';
import { presentIf } from '@/shared/libs/utils';

import style from './button.module.scss';

type Props = {
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
};

function Button({ type, disabled, className, isLoading }: Props) {
  return (
    <button
      className={clsx(style.root, className)}
      type={type}
      disabled={isLoading || disabled}
      data-loading={presentIf(isLoading)}
    >
      <span className={style.text}>Search</span>
      {isLoading && (
        <ImageWrapper
          src={spinnerUrl}
          alt="spinner"
          className={style.spinner}
        />
      )}
    </button>
  );
}

export default Button;
