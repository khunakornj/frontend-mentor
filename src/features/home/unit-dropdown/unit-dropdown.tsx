import { useStateList } from 'react-use';

import MultiDropdown from '@/components/presentation/multi-dropdown/multi-dropdown';
import {
  PRECIPITATION,
  TEMPERATURES,
  UNIT_TYPES,
  WIND_SPEEDS,
} from '@/shared/common/constant';
import { useUnitStore } from '@/shared/store/unit-store';

import {
  getPrecipitationDisplay,
  getTemperatureDisplay,
  getUnitTypeDisplay,
  getWindSpeedDisplay,
} from './unit-dropdown.util';

function UnitDropdown() {
  // slice to remove readonly
  const { next, state } = useStateList(UNIT_TYPES.slice());
  const store = useUnitStore();

  store.setUnit(state);

  const items = [
    ...TEMPERATURES.map((temp) => ({
      label: getTemperatureDisplay(temp),
      value: temp,
      group: 'Temperature',
      disabled: true,
      defaultChecked: store.temperature === temp,
    })),
    ...WIND_SPEEDS.map((wind) => ({
      label: getWindSpeedDisplay(wind),
      value: wind,
      group: 'Wind Speed',
      disabled: true,
      defaultChecked: store.windSpeed === wind,
    })),
    ...PRECIPITATION.map((precip) => ({
      label: getPrecipitationDisplay(precip),
      value: precip,
      group: 'Precipitation',
      disabled: true,
      defaultChecked: store.precipitation === precip,
    })),
  ];

  const onClickUnitType = () => {
    next();
  };
  // useEffect(() => {
  //   store.setUnit(state);
  // }, [state]);

  return (
    <MultiDropdown
      items={items}
      itemControl={{
        label: getUnitTypeDisplay(state),
        onClick: onClickUnitType,
      }}
    />
  );
}

export default UnitDropdown;
