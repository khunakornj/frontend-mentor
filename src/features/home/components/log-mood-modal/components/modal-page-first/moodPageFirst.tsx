import type { Mood } from '@/shared/common/types';
import RadioGroup from '@/shared/components/radio-group/radioGroup';

import style from './moodPageFirst.module.css';

type Datum = {
  value: Mood;
  label: string;
};

function MoodPageFirst(props: React.ComponentProps<'div'>) {
  const data: Datum[] = [
    {
      value: 'veryHappy',
      label: 'Very Happy',
    },
    {
      value: 'happy',
      label: 'Happy',
    },
    {
      value: 'neutral',
      label: 'Neutral',
    },
    {
      value: 'sad',
      label: 'Sad',
    },
    {
      value: 'verySad',
      label: 'Very Sad',
    },
  ];

  return (
    <div className={style.container} {...props}>
      <h2 className={style.heading}>How was your mood today?</h2>

      <RadioGroup className={style.radioGroup} data={data} />
    </div>
  );
}

export default MoodPageFirst;
