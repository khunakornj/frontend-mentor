import SummaryBox from './summary-box/SummaryBox';
import { cn } from '@/shared/lib/utils';
import charPattern from '@assets/pattern-character-count.svg';
import sentencePattern from '@assets/pattern-sentence-count.svg';
import wordPattern from '@assets/pattern-word-count.svg';
import type React from 'react';
import { useMemo } from 'react';

type Props = {
  char: string;
  isExcludeSpace: boolean;
} & React.ComponentProps<'div'>;

function InputSummary({
  char,
  isExcludeSpace: isExludeSpace,
  className,
  ...props
}: Props) {
  const totalChar = useMemo(
    () => (isExludeSpace ? char.replaceAll(' ', '').length : char.length),
    [char, isExludeSpace],
  );
  const totalWord = useMemo(
    () => (char.length ? char.split(' ').filter((x) => x).length : 0),
    [char],
  );
  const totalSentence = useMemo(
    () => (char.length ? char.split('.').filter((x) => x).length : 0),
    [char],
  );

  return (
    <div className={cn('gap-x-ds200 flex flex-row', className)} {...props}>
      <SummaryBox
        count={totalChar}
        description="Total Characters"
        imgSrc={charPattern}
        className="bg-ds-purple400"
      />
      <SummaryBox
        count={totalWord}
        description="Word Count"
        imgSrc={wordPattern}
        className="bg-ds-yellow500"
      />
      <SummaryBox
        count={totalSentence}
        description="Sentence Count"
        imgSrc={sentencePattern}
        className="bg-ds-orange500"
      />
    </div>
  );
}

export default InputSummary;
