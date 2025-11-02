import CheckboxLabel from '@/shared/components/check-box-label/CheckboxLabel';
import { cn } from '@/shared/lib/utils';
import { Input } from '@/shared/shadcn/input';
import { Textarea } from '@/shared/shadcn/textarea';
import React, { useState } from 'react';

type Props = {
  onType: (x: string) => void;
} & React.ComponentProps<'div'>;

function InputSection({ onType, className, ...props }: Props) {
  const [isExcludeSpace, setIsExcludeSpace] = useState(false);
  const [isCharLimit, setIsCharLimit] = useState(false);

  const [charLimit, setCharLimit] = useState(0);

  function onCharLimitCheck(isCheck: boolean) {
    setIsCharLimit(isCheck);

    if (!isCharLimit) {
      setCharLimit(0);
    }
  }

  return (
    <div className={cn('', className)} {...props}>
      <Textarea
        placeholder="text here..."
        className="text-ds-neutral200 bg-ds-neutral700 border-ds-neutral800 mb-ds200 h-[200px] resize-none"
        onChange={(x) => onType(x.target.value)}
      />

      <div className="gap-x-ds300 flex flex-row items-center">
        <CheckboxLabel
          checkOptions={{
            onCheckedChange: (x: boolean) => setIsExcludeSpace(x),
            checked: isExcludeSpace,
          }}
        >
          Exclude Spaces
        </CheckboxLabel>
        <CheckboxLabel
          checkOptions={{
            onCheckedChange: (x: boolean) => onCharLimitCheck(x),
            checked: isCharLimit,
          }}
        >
          Set Character Limit
        </CheckboxLabel>

        <Input
          className={cn(
            'selection:bg-ds-neutral600 max-h-[34px] max-w-[56px] border-[#404040] text-white',
            !isCharLimit && 'invisible',
          )}
          type="text"
          inputMode="numeric"
          value={charLimit}
          onChange={(x) => {
            if (!isNaN(Number(x.target.value))) {
              setCharLimit(Number(x.target.value));
            }
          }}
        />
      </div>
    </div>
  );
}

export default InputSection;
