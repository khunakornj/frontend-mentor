import { cn } from '@/shared/lib/utils';
import type React from 'react';

function Title({ children, className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <div className={cn('mx-auto max-w-fit text-center', className)} {...props}>
      <h1 className="text-preset-1 text-ds-neutral100 max-w-fit">{children}</h1>
    </div>
  );
}

export default Title;
