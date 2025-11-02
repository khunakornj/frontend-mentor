import ImageWrapper from '@/shared/components/image-wrapper/ImageWrapper';
import { cn } from '@/shared/lib/utils';
import sun from '@assets/icon-sun.svg';
import logo from '@assets/logo-dark-theme.svg';
import type React from 'react';

function Header({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-row items-center justify-between', className)}
      {...props}
    >
      <img src={logo} alt="character-counter" />

      <div className="bg-ds-neutral700 rounded-ds08 p-ds150 h-[44px] w-[44px]">
        <ImageWrapper src={sun} alt="sun" className="h-[18px] w-[18px]" />
      </div>
    </div>
  );
}

export default Header;
