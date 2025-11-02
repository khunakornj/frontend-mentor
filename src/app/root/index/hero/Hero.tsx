import HeroText from '../hero-text/HeroText';
import MainLogo from '@/shared/components/logo-home/LogoHome';
import { cn } from '@/shared/lib/utils';
import type React from 'react';

function Hero({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex w-full flex-col items-center', className)}
      {...props}
    >
      <MainLogo className="mb-ds700 h-[125px] w-[125px]" />

      <HeroText titleText="A history of everything you copy">
        Clipboard allows you to track and organize everything you copy.
        Instantly <br />
        access your clipboard on all your devices.
      </HeroText>
    </div>
  );
}

export default Hero;
