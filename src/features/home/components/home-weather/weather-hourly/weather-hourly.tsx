import { Suspense } from 'react';

import SingleDropdown from '@/components/presentation/single-dropdown/single-dropdown';

import { useWeatherHourlyDropdown } from './weather-hourly.hooks';
import style from './weather-hourly.module.scss';
import WeatherHourlyItems from './weather-hourly-items/weather-hourly-items';
import WeatherHourlyItemsLoading from './weather-hourly-items/weather-hourly-items.loading';

function WeatherHourly() {
  const [selectDay, handlers] = useWeatherHourlyDropdown();

  return (
    <div className={style.root}>
      <div className={style.heading}>
        <h2 className={style.headingText}>Hourly forecast</h2>
        <SingleDropdown
          items={handlers.dropdownData}
          onSelect={handlers.onSelect}
          defaultValue={selectDay}
        />
      </div>

      <Suspense fallback={<WeatherHourlyItemsLoading />}>
        <WeatherHourlyItems selectDay={selectDay} />
      </Suspense>
    </div>
  );
}

export default WeatherHourly;
