import { cn } from '@/shared/lib/utils';
import type React from 'react';

type Props = {
  src: string;
  alt: string;
} & React.ComponentProps<'div'>;

function ImageWrapper({ src, alt, className, ...props }: Props) {
  return (
    <div className={cn('', className)} {...props}>
      <img src={src} alt={alt} className="h-full w-full" />
    </div>
  );
}

export default ImageWrapper;
