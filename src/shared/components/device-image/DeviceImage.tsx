import { cn } from '@/shared/lib/utils';
import image from '@assets/image-devices.png';
import type React from 'react';

function DeviceImage({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('', className)} {...props}>
      <img src={image} alt="device-image" className="h-full w-full" />
    </div>
  );
}

export default DeviceImage;
