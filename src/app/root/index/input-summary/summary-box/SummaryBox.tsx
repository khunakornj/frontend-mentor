import { cn } from '@/shared/lib/utils';
import type React from 'react';

type Props = {
  count: number;
  description: string;
  imgSrc: string;
} & React.ComponentProps<'div'>;

function SummaryBox({
  className,
  count,
  description,
  imgSrc,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        'rounded-ds12 px-ds200 py-ds300 relative flex flex-1 flex-col overflow-clip bg-white',
        className,
      )}
      {...props}
    >
      <h2 className="text-preset-1 text-ds-neutral900">
        {count.toString().padStart(2, '0')}
      </h2>
      <p className="text-preset-3 text-ds-neutral900">{description}</p>
      <img src={imgSrc} alt="" className="-right-ds400 absolute top-0" />
    </div>
  );
}

export default SummaryBox;
