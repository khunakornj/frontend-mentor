import searchIcon from '@assets/search-icon.svg';
import clsx from 'clsx';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';
import { presentIf } from '@/shared/libs/utils';

import style from './input.module.scss';

type Props = {
  className?: string;
  onType?: (v: string) => void;
  isLoading?: boolean;
};

function Input({ className, onType, isLoading, ...props }: Props) {
  return (
    <label className={clsx(style.root, className)} aria-disabled>
      <ImageWrapper src={searchIcon} alt="search-icon" className={style.img} />
      <input
        className={style.input}
        placeholder="Search for a city"
        data-loading={presentIf(isLoading)}
        onChange={(e) => {
          onType?.(e.target.value);
        }}
        {...props}
      />
    </label>
  );
}

export default Input;
