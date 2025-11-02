import { cn } from '@/shared/lib/utils';
import type React from 'react';

type Props = {
  titleText: string;
} & React.ComponentProps<'div'>;

function HeroText({ className, children, titleText, ...props }: Props) {
  return (
    <div className={cn('flex flex-col items-center', className)} {...props}>
      {/* paragraph */}
      <div className="mb-ds600">
        <h1 className="text-preset-1 text-ds-gray-700 mb-ds200 text-center">
          {titleText}
        </h1>
        <p className="text-preset-7-regular text-ds-gray-500 text-center">
          {children}
        </p>
      </div>

      {/* button */}
      <div className="gap-ds200 flex flex-row">
        <a
          href="/"
          className="bg-ds-green-500 text-preset-7-semibold px-ds300 py-ds100 rounded-full text-white"
        >
          Download for iOS
        </a>
        <a
          href="/"
          className="bg-ds-blue-500 text-preset-7-semibold px-ds300 py-ds100 rounded-full text-white"
        >
          Download for Mac
        </a>
      </div>
    </div>
  );
}

export default HeroText;
