import Checkbox from '@/shared/components/checkbox/checkbox';

import { MODAL_PAGE_SECOND_CHECKBOX_DATA } from './modalPageSecond.data';
import style from './modalPageSecond.module.css';

type Props = {} & React.ComponentProps<'div'>;

function ModalPageSecond({ ...props }: Props) {
  return (
    <div className={style.container} {...props}>
      <div className={style.title}>
        <h2 className={style.heading}>How did you feel?</h2>
        <p className={style.details}>Select up to three tags:</p>
      </div>

      <div className={style.checkBoxGroup}>
        {MODAL_PAGE_SECOND_CHECKBOX_DATA.map((d) => (
          <Checkbox value={d.value} label={d.label} key={d.value} />
        ))}
      </div>
    </div>
  );
}

export default ModalPageSecond;
