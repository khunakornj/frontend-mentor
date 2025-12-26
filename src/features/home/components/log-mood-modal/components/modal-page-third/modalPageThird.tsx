import style from './modalPageThird.module.css';

function ModalPageThird() {
  return (
    <div className={style.container}>
      <h2>Write about your day...</h2>

      <div className={style.textAreaContainer}>
        <textarea
          className={style.textArea}
          name="description"
          placeholder="Today, I felt…"
        />
        <span className={style.countNum}>0/150</span>
      </div>
    </div>
  );
}

export default ModalPageThird;
