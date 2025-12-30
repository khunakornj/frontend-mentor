import { Progress } from '@ark-ui/react';
import clsx from 'clsx';
import { forwardRef } from 'react';

import style from './progress-bar.module.css';

type Props = {
  className?: string;
  value: number;
  maxValue?: number;
};

const ProgressBar = forwardRef(
  (
    { value, className, maxValue = 100, ...props }: Props,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => (
    <Progress.Root
      value={value}
      ref={ref}
      className={clsx(style.root, className)}
      max={maxValue}
      {...props}
    >
      <Progress.Track className={style.track}>
        <Progress.Range className={style.indicator} />
      </Progress.Track>
    </Progress.Root>
  ),
);

export default ProgressBar;
