import { myDayjs } from '@/shared/libs/dayjs';

import type { CardRightBarValue } from './cardRight.type';

export const CARD_RIGHT_BAR_DATA: CardRightBarValue[] = [
  {
    mood: 'sad',
    sleepValue: 1,
    date: myDayjs('2025-01-03'),
  },
  {
    mood: 'happy',
    sleepValue: 3,
    date: myDayjs('2025-01-05'),
  },
  {
    mood: 'verySad',
    sleepValue: 1,
    date: myDayjs('2025-01-09'),
  },
  {
    mood: 'sad',
    sleepValue: 1,
    date: myDayjs('2025-01-12'),
  },
  {
    mood: 'veryHappy',
    sleepValue: 4,
    date: myDayjs('2025-01-16'),
  },

  {
    mood: 'sad',
    sleepValue: 1,
    date: myDayjs('2025-01-19'),
  },
  {
    mood: 'happy',
    sleepValue: 3,
    date: myDayjs('2025-01-22'),
  },
  {
    mood: 'verySad',
    sleepValue: 0,
    date: myDayjs('2025-01-27'),
  },
  {
    mood: 'sad',
    sleepValue: 2,
    date: myDayjs('2025-02-01'),
  },
  {
    mood: 'veryHappy',
    sleepValue: 4,
    date: myDayjs('2025-02-03'),
  },
];
