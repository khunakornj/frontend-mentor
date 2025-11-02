import SidePanel from './side-panel/SidePanel';
import MacImage from '@/shared/components/mac-image/MacImage';
import { cn } from '@/shared/lib/utils';
import type React from 'react';

function SnippetShowcase({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('', className)} {...props}>
      {/* heading */}
      <div className="gap-y-ds200 mb-ds800 flex flex-col items-center text-center">
        <h1 className="text-ds-gray-700 text-preset-3">
          Keep track of your snippets
        </h1>
        <p className="text-ds-gray-500 text-preset-7-regular">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can
          <br /> access your snippets immediately on all your devices. Our Mac
          and iOS apps
          <br /> will help you organize everything.
        </p>
      </div>

      {/* body */}
      <div className="flex flex-row">
        <MacImage className="h-[572px] w-[752px]" />

        <div className="gap-y-ds800 px-ds1200 py-ds1200 flex flex-col">
          <SidePanel title="Quick Search">
            Easily search your snippets by content,
            <br /> category, web address, application, and more.
          </SidePanel>
          <SidePanel title="iCloud Sync">
            Instantly saves and syncs snippets across all
            <br /> your devices.
          </SidePanel>
          <SidePanel title="Complete History">
            Retrieve any snippets from the first moment
            <br /> you started using the app.
          </SidePanel>
        </div>
      </div>
    </div>
  );
}

export default SnippetShowcase;
