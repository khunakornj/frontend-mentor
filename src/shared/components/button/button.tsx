import style from './button.module.css';

type Props = {
  buttonType?: 'primary' | 'secondary';
};

function Button({ buttonType = 'primary' }: Props) {
  return (
    <div className={style.container}>
      <button
        className={
          buttonType === 'primary' ? style.button : style.buttonSecondary
        }
      >
        Sign Up
      </button>
    </div>
  );
}

export default Button;
