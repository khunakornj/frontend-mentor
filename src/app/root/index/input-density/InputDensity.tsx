import { cn } from '@/shared/lib/utils';
import { Progress } from '@/shared/shadcn/progress';
import caratDown from '@assets/carat-down.svg';
import type React from 'react';
import { useMemo } from 'react';
import { useToggle } from 'react-use';
import { prop, sortBy } from 'remeda';

type Props = {
  char: string;
} & React.ComponentProps<'div'>;

function InputDensity({ char, className, ...props }: Props) {
  const [isSeeMore, toggleSeeMore] = useToggle(false);

  const densitySummary = useMemo(() => {
    const summary = new Map<string, { amount: number; percent: number }>();
    const totalAmount = char.length;

    for (const letter of char) {
      if (letter === ' ') {
        continue;
      }

      let letterSum = summary.get(letter);
      if (!letterSum) {
        letterSum = { amount: 0, percent: 0 };
      }

      letterSum.amount += 1;
      letterSum.percent = (letterSum.amount / totalAmount) * 100;

      summary.set(letter, letterSum);
    }

    return summary;
  }, [char]);

  const densitySummaryDisplay = useMemo(() => {
    let arrResult = sortBy(
      Array.from(densitySummary, ([letter, sum]) => ({
        letter,
        amount: sum.amount,
        percent: sum.percent,
      })),
      [prop('amount'), 'desc'],
    );

    if (!isSeeMore) {
      arrResult = arrResult.slice(0, 5);
    }

    return arrResult;
  }, [densitySummary, isSeeMore]);

  return (
    <div className={cn('gap-y-ds250 flex flex-col', className)} {...props}>
      <h2 className="text-preset-2 text-ds-neutral200">Letter Density</h2>

      <div>
        {densitySummaryDisplay.map((summary) => (
          <div className="gap-x-ds200 gap-y-ds150 flex flex-row items-center justify-between">
            <h3 className="text-preset-4 text-ds-neutral200 w-[1ch]">
              {summary.letter.toUpperCase()}
            </h3>
            <Progress className="bg-ds-neutral800" value={summary.percent} />
            <h3 className="text-preset-4 text-ds-neutral200 w-[2rem] whitespace-nowrap">
              {summary.amount} ({summary.percent.toFixed(2)}%)
            </h3>
          </div>
        ))}
      </div>

      <div
        className={cn(
          'gap-x-ds100 flex max-w-fit cursor-pointer flex-row items-center',
          densitySummaryDisplay.length < 5 && 'hidden',
        )}
        onClick={() => toggleSeeMore()}
      >
        <h3 className="text-preset-3 text-ds-neutral200">
          {isSeeMore ? 'See less' : 'See more'}
        </h3>
        <img src={caratDown} alt="" className={cn(isSeeMore && 'rotate-180')} />
      </div>
    </div>
  );
}

export default InputDensity;
