import { cn } from '@/shared/lib/utils';
import googleLogo from '@assets/logo-google.png';
import hpLogo from '@assets/logo-hp.png';
import ibmLogo from '@assets/logo-ibm.png';
import microsoftLogo from '@assets/logo-microsoft.png';
import vectorLogo from '@assets/logo-vector-graphics.png';
import type React from 'react';

const sponsors: { src: string; alt: string }[] = [
  { src: googleLogo, alt: 'google-logo' },
  { src: ibmLogo, alt: 'ibm-logo' },
  { src: microsoftLogo, alt: 'microsoft-logo' },
  { src: hpLogo, alt: 'hp-logo' },
  { src: vectorLogo, alt: 'vector-logo' },
];

function Sponsor({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'mx-auto flex w-[1112px] flex-row items-center justify-between',
        className,
      )}
      {...props}
    >
      {sponsors.map(({ src, alt }, i) => (
        <div className="w-[165px]">
          <img key={i} src={src} alt={alt} className="w-full" />
        </div>
      ))}
    </div>
  );
}

export default Sponsor;
