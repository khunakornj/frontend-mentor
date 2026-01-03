import searchIcon from '@assets/search-icon.svg';
import clsx from 'clsx';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';

import style from './input.module.scss';

type Props = {
  className?: string;
  onType?: (v: string) => void;
};

function Input({ className, onType }: Props) {
  return (
    <label className={clsx(style.root, className)}>
      <ImageWrapper src={searchIcon} alt="search-icon" className={style.img} />
      <input
        className={style.input}
        placeholder="Search for a city"
        onChange={(e) => {
          onType?.(e.target.value);
        }}
      />
    </label>
  );
}

export default Input;
