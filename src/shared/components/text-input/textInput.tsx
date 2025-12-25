import infoCircleUrl from '@shared/assets/info-circle.svg';

import { presentIf } from '@/shared/libs/utils';

import style from './textInput.module.css';

type Props = {
  inputType?: Extract<
    React.HTMLInputTypeAttribute,
    'text' | 'email' | 'password'
  >;
  placeHolder?: string;
  errorText?: string;
};

function ErrorText({ text }: { text?: string }) {
  if (!text) {
    return undefined;
  }

  return (
    <div className={style.errorTextContainer}>
      <img src={infoCircleUrl} alt="info" width="11" height="11" />
      <span className={style.errorText}>{text}</span>
    </div>
  );
}

function TextInput({
  errorText = '',
  inputType = 'text',
  placeHolder = 'name@example.com',
}: Props) {
  return (
    <div className={style.container}>
      <input
        type={inputType}
        className={style.textInput}
        placeholder={placeHolder}
        data-invalid={presentIf(!!errorText)}
      />
      <ErrorText text={errorText} />
    </div>
  );
}

export default TextInput;
