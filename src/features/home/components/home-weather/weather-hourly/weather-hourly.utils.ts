import type { MyDayJs } from '@/shared/common/types';

export function displayHour(dayjs: MyDayJs) {
  return dayjs.format('h a');
}
