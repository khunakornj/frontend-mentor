import { useState } from 'react';
import * as R from 'remeda';

import type { DropdownData, MyDayJs } from '@/shared/common/types';
import myDayJs from '@/shared/libs/dayjs';

export type HourlyData = {
  time: MyDayJs;
  temperature: number;
  weatherCode: number;
};

export function useWeatherHourlyDropdown() {
  // start week is sunday, we want to start monday
  const startWeek = myDayJs().startOf('weeks').add(1, 'days');

  const dropdownData: DropdownData[] = R.pipe(
    R.range(0, 8),
    R.map((offset) => startWeek.add(offset, 'days')),
    R.map((day) => ({
      label: day.tz().format('dddd'),
      value: day.format('YYYY-MM-DD'),
    })),
  );

  // default today
  const [selectDay, onSelect] = useState(myDayJs().format('YYYY-MM-DD'));

  return [
    selectDay,
    {
      dropdownData,
      onSelect,
    },
  ] as const;
}
