import { Checkbox } from '../check-box/Checkbox';
import { cn } from '@/shared/lib/utils';
import { Label } from '@/shared/shadcn/label';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type React from 'react';

type Props = {
  checkOptions?: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;
} & React.ComponentProps<'div'>;

function CheckboxLabel({ className, children, checkOptions, ...props }: Props) {
  return (
    <div
      className={cn('gap-x-ds100 py-ds025 flex flex-row', className)}
      {...props}
    >
      <Checkbox {...checkOptions} />
      <Label className="text-preset-4 text-ds-neutral200">{children}</Label>
    </div>
  );
}

export default CheckboxLabel;
