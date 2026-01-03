import searchIcon from '@assets/search-icon.svg';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';

import style from './input.module.scss';

function Input() {
  return (
    <label className={style.root}>
      <ImageWrapper src={searchIcon} alt="search-icon" className={style.img} />
      <input className={style.input} placeholder="Search for a city" />
    </label>
  );
}

export default Input;
