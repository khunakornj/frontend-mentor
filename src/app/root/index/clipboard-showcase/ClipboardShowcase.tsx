import DeviceImage from '@/shared/components/device-image/DeviceImage';
import { cn } from '@/shared/lib/utils';
import type React from 'react';

function ClipboardShowcase({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex w-full flex-col items-center', className)}
      {...props}
    >
      {/* head text */}
      <div className="gap-y-ds200 mb-ds1200 flex flex-col text-center">
        <h1 className="text-preset-3 text-ds-gray-700">
          Access Clipboard anywhere
        </h1>
        <p className="text-preset-7-regular text-ds-gray-500">
          Whether you’re on the go, or at your computer, you can access all your
          <br />
          Clipboard snippets in a few simple clicks.
        </p>
      </div>

      {/* image */}
      <DeviceImage className="h-[472px] w-[780px]" />
    </div>
  );
}

export default ClipboardShowcase;
