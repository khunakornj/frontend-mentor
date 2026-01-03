import style from './button.module.scss';

function Button() {
  return (
    <button className={style.root}>
      <label htmlFor="button" className={style.text}>
        Search
      </label>
    </button>
  );
}

export default Button;
