import { cn } from '@/shared/lib/utils';
import macimage from '@assets/image-computer.png';
import type React from 'react';

function MacImage({ className }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('', className)}>
      <img src={macimage} alt="mac-image" className="h-full w-full" />
    </div>
  );
}

export default MacImage;
