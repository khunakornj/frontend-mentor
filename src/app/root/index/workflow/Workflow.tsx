import WorkflowSection from './workflow-section/WorkflowSection';
import { cn } from '@/shared/lib/utils';
import blacklistlogo from '@assets/icon-blacklist.svg';
import previewlogo from '@assets/icon-preview.svg';
import textlogo from '@assets/icon-text.svg';
import type React from 'react';

function Workflow({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('gap-y-ds900 mx-auto flex w-[1114px] flex-col', className)}
      {...props}
    >
      {/* header */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-ds-gray-700 text-preset-3">
          Supercharge your workflow
        </h1>
        <p className="text-ds-gray-500 text-preset-7-regular">
          We’ve got the tools to boost your productivity.
        </p>
      </div>

      {/* each section */}
      <div className="flex flex-row items-baseline justify-between">
        <WorkflowSection titleText="Create blacklists" logoSrc={blacklistlogo}>
          Ensure sensitive information never makes its
          <br /> way to your clipboard by excluding certain
          <br /> sources.
        </WorkflowSection>

        <WorkflowSection titleText="Plain text snippets" logoSrc={textlogo}>
          Remove unwanted formatting from copied text
          <br /> for a consistent look.
        </WorkflowSection>

        <WorkflowSection titleText="Sneak preview" logoSrc={previewlogo}>
          Quick preview of all snippets on your
          <br /> Clipboard for easy access.
        </WorkflowSection>
      </div>
    </div>
  );
}

export default Workflow;
