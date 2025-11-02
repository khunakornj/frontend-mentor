import { cn } from '@/shared/lib/utils';
import type React from 'react';

type Props = {
  titleText: string;
  logoSrc: string;
} & React.ComponentProps<'div'>;

function WorkflowSection({
  className,
  titleText,
  logoSrc,
  children,
  ...props
}: Props) {
  return (
    <div className={cn('flex flex-col', className)} {...props}>
      {/* image */}
      <div className="mb-ds500 m-auto h-[40px] w-[55px]">
        <img src={logoSrc} alt="" className="h-full w-full" />
      </div>

      <div className="gap-y-ds200 flex flex-col text-center">
        <h1 className="text-preset-6 text-ds-gray-700">{titleText}</h1>
        <p className="text-ds-gray-500 text-preset-8">{children}</p>
      </div>
    </div>
  );
}

export default WorkflowSection;
