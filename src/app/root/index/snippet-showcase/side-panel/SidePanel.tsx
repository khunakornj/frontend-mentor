import { cn } from '@/shared/lib/utils';
import type React from 'react';

type Props = {
  title: string;
} & React.ComponentProps<'div'>;

function SidePanel({ title, className, children, ...props }: Props) {
  return (
    <div className={cn('', className)} {...props}>
      <h1 className="text-ds-gray-700 text-preset-6">{title}</h1>
      <p className="text-ds-gray-500 text-preset-8">{children}</p>
    </div>
  );
}

export default SidePanel;
