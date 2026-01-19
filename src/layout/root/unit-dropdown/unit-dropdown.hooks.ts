import type { MultiDropdownItemProps } from '@/components/presentation/multi-dropdown/multi-dropdown';
import { useUnitStore } from '@/features/home/stores/unit-store';
import {
  PRECIPITATION,
  TEMPERATURES,
  UNIT_TYPES,
  WIND_SPEEDS,
} from '@/shared/common/constant';
import { useCycle } from '@/shared/hooks/use-cycle';

import {
  getPrecipitationLabel,
  getTemperatureLabel,
  getWindSpeedLabel,
} from './unit-dropdown.util';

export function useUnitDropdownItems() {
  const [state, { next }] = useCycle(UNIT_TYPES);

  const store = useUnitStore();

  const items: MultiDropdownItemProps[] = [];
  const defaultValue: string[] = [];

  TEMPERATURES.forEach((temp) => {
    items.push({
      label: getTemperatureLabel(temp),
      value: temp,
      group: 'Temperature',
      disabled: true,
    });

    if (temp === store.temperature) {
      defaultValue.push(temp);
    }
  });
  WIND_SPEEDS.forEach((wind) => {
    items.push({
      label: getWindSpeedLabel(wind),
      value: wind,
      group: 'Wind Speed',
      disabled: true,
    });

    if (wind === store.windSpeed) {
      defaultValue.push(wind);
    }
  });
  PRECIPITATION.forEach((precip) => {
    items.push({
      label: getPrecipitationLabel(precip),
      value: precip,
      group: 'Precipitation',
      disabled: true,
    });

    if (precip === store.precipitation) {
      defaultValue.push(precip);
    }
  });

  const onClickUnitType = () => {
    const nextState = next();
    store.setUnit(nextState);
  };

  return {
    items,
    defaultValue,
    onClickUnitType,
    unitState: state,
  };
}
