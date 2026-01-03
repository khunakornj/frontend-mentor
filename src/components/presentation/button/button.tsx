import clsx from 'clsx';

import style from './button.module.scss';

type Props = {
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  className?: string;
};

function Button({ type, disabled, className }: Props) {
  return (
    <button
      className={clsx(style.root, className)}
      type={type}
      disabled={disabled}
    >
      <span className={style.text}>Search</span>
    </button>
  );
}

export default Button;
