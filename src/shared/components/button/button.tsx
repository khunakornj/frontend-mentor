import * as Label from '@radix-ui/react-label';

import style from './button.module.css';

type Props = {
  buttonType?: 'primary' | 'secondary';
  text: string;
} & React.ComponentProps<'button'>;

function Button({ buttonType = 'primary', text, ...props }: Props) {
  return (
    <div className={style.container}>
      <button
        className={
          buttonType === 'primary' ? style.button : style.buttonSecondary
        }
        {...props}
      >
        <Label.Root>{text}</Label.Root>
      </button>
    </div>
  );
}

export default Button;
