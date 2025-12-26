import { Label } from 'radix-ui';

import style from './buttonMain.module.css';

function ButtonMain() {
  return (
    <div className={style.container}>
      <button>
        <Label.Root className={style.text}>I Know This</Label.Root>
      </button>
    </div>
  );
}

export default ButtonMain;

function Icon() {}
