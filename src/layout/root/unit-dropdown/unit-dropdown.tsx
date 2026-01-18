import MultiDropdown from '@/components/presentation/multi-dropdown/multi-dropdown';

import { useUnitDropdownItems } from './unit-dropdown.hooks';
import { getUnitTypeLabel } from './unit-dropdown.util';

function UnitDropdown() {
  // slice to remove readonly
  const { items, defaultValue, onClickUnitType, unitState } =
    useUnitDropdownItems();

  return (
    <MultiDropdown
      items={items}
      label="Units"
      defaultValue={defaultValue}
      itemControl={{
        label: getUnitTypeLabel(unitState),
        onClick: onClickUnitType,
      }}
    />
  );
}

export default UnitDropdown;
