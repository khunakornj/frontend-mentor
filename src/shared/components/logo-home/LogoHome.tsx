import { cn } from '@/shared/lib/utils';
import logo from '@assets/logo.svg';
import type React from 'react';

function MainLogo({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('', className)} {...props}>
      <img src={logo} alt="" className="h-full w-full" />
    </div>
  );
}

export default MainLogo;
