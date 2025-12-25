import type { Dayjs, Mood } from '@/shared/common/types';

export type CardRightBarValue = {
  sleepValue: number;
  mood: Mood;
  date: Dayjs;
};
