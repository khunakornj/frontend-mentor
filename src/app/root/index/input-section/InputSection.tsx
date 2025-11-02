import CheckboxLabel from '@/shared/components/check-box-label/CheckboxLabel';
import { cn } from '@/shared/lib/utils';
import { Input } from '@/shared/shadcn/input';
import { Textarea } from '@/shared/shadcn/textarea';
import React, { useMemo, useState } from 'react';

type Props = {
  char: string;
  onType: (x: string) => void;
  isExcludeSpace: boolean;
  onExludeSpaceChecked: (x: boolean) => void;
} & React.ComponentProps<'div'>;

function InputSection({
  char,
  onType,
  className,
  isExcludeSpace,
  onExludeSpaceChecked,
  ...props
}: Props) {
  const [isCharLimit, setIsCharLimit] = useState(false);

  const [charLimit, setCharLimit] = useState(0);

  const isExceed = useMemo(() => {
    if (charLimit === 0) {
      return false;
    }

    let target = char;

    if (isExcludeSpace) {
      target = char.replaceAll(' ', '');
    }

    return target.length > charLimit;
  }, [char, isExcludeSpace, charLimit]);

  function onCharLimitCheck(isCheck: boolean) {
    setIsCharLimit(isCheck);
    setCharLimit(0);
  }

  return (
    <div className={cn('', className)} {...props}>
      <div className="mb-ds200">
        <Textarea
          placeholder="text here..."
          className={cn(
            'text-ds-neutral200 bg-ds-neutral700 border-ds-neutral800 mb-ds150 h-[200px] resize-none',
            isExceed &&
              'border-ds-orange500 focus-visible:border-ds-orange500 focus-visible:ring-ds-orange500/50',
          )}
          onChange={(x) => onType(x.target.value)}
        />
        <span
          className={cn(
            'text-preset-4 text-ds-orange500',
            !isExceed && 'hidden',
          )}
        >
          Limit reached! Your text exceeds {charLimit} characters.
        </span>
      </div>

      <div className="gap-x-ds300 flex flex-row items-center">
        <CheckboxLabel
          checkOptions={{
            onCheckedChange: (x: boolean) => onExludeSpaceChecked(x),
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
          value={charLimit === 0 ? '' : charLimit}
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
