import style from './textInput.module.css';

type Props = {
  inputType?: React.HTMLInputTypeAttribute;
  placeHolder?: string;
};

function TextInput({
  inputType = 'text',
  placeHolder = 'name@example.com',
}: Props) {
  return (
    <div className={style.container}>
      <input
        type={inputType}
        className={style.textInput}
        placeholder={placeHolder}
      />
    </div>
  );
}

export default TextInput;
