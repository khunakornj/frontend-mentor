import style from './button.module.css';

type Props = {
  buttonType?: 'primary' | 'secondary';
  text: string;
};

function Button({ buttonType = 'primary', text }: Props) {
  return (
    <div className={style.container}>
      <button
        className={
          buttonType === 'primary' ? style.button : style.buttonSecondary
        }
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
