import * as progress from '@zag-js/progress';
import { normalizeProps, useMachine } from '@zag-js/react';
import clsx from 'clsx';
import { useId } from 'react';

import style from './progress-bar.module.scss';

type Props = {
  className?: string;
  value: number;
  maxValue?: number;
  onValueChange(v: number): void;
};

function ProgressBar({
  value,
  className,
  onValueChange,
  maxValue = 100,
  ...props
}: Props) {
  const service = useMachine(progress.machine, {
    id: useId(),
    max: maxValue,
    value,
    onValueChange(v) {
      if (v.value !== null) {
        onValueChange(v.value);
      }
    },
  });

  const api = progress.connect(service, normalizeProps);

  return (
    <div
      className={clsx(style.root, className)}
      {...api.getRootProps()}
      {...props}
    >
      <div className={style.track} {...api.getTrackProps()}>
        <div className={style.track_indicator} {...api.getRangeProps()} />
      </div>
    </div>
  );
}

export default ProgressBar;
