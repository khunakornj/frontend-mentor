import { createCustomVars } from '@/shared/libs/cssVars';
import { presentIf } from '@/shared/libs/utils';

import style from './modalTitle.module.css';

type Props = {
  sectionCount?: number;
  cuurentSectionIndex?: number;
} & React.ComponentProps<'div'>;

const setVar = createCustomVars({
  gridCount: '--grid-count',
});

function ModalTitle({
  sectionCount = 4,
  cuurentSectionIndex = 0,
  ...props
}: Props) {
  return (
    <div
      className={style.container}
      {...props}
      style={setVar({
        gridCount: sectionCount,
      })}
    >
      <h1 className={style.heading}>Log your mood</h1>

      <div className={style.dashContainer}>
        {Array(sectionCount)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={style.dash}
              data-active={presentIf(i <= cuurentSectionIndex)}
            ></div>
          ))}
      </div>
    </div>
  );
}

export default ModalTitle;
