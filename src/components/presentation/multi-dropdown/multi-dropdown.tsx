import { Portal } from '@ark-ui/react/portal';
import { createListCollection, Select } from '@ark-ui/react/select';
import gearIcon from '@assets/gear.svg';
import { Fragment } from 'react/jsx-runtime';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';

import style from './multi-dropdown.module.scss';

export type MultiDropdownItemProps = {
  label: string;
  value: string;
  group: string;
  disabled?: boolean;
};
type Props = {
  label?: string;
  itemControl?: {
    label: string;
    onClick?: () => void;
  };
  items: MultiDropdownItemProps[];
  defaultValue?: string[];
};

function MultiDropdown({ label, items, itemControl, defaultValue }: Props) {
  const collection = createListCollection({
    items,
    groupBy: (item) => item.group,
    isItemDisabled: (item) => item.disabled || false,
  });

  return (
    <Select.Root collection={collection} multiple={true} value={defaultValue}>
      <Select.Control>
        <Select.Trigger className={style.trigger}>
          <Select.ValueText>{label || 'placeholder'}</Select.ValueText>
          <Select.Indicator>
            <ImageWrapper className={style.icon} src={gearIcon} alt="gear" />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content className={style.content}>
            {itemControl && (
              <div className={style.control} onClick={itemControl.onClick}>
                <h2 className={style.controlLabel}>{itemControl.label}</h2>
              </div>
            )}
            {collection.group().map(([type, group], i) => (
              <Fragment key={type}>
                {i !== 0 && <div className={style.seperator}></div>}
                <Select.ItemGroup>
                  <Select.ItemGroupLabel className={style.groupLabel}>
                    {type}
                  </Select.ItemGroupLabel>
                  {group.map((item) => (
                    <Select.Item
                      key={item.value}
                      item={item}
                      className={style.item}
                    >
                      <Select.ItemText>{item.label}</Select.ItemText>
                      <Select.ItemIndicator>✓</Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.ItemGroup>
              </Fragment>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
}

export default MultiDropdown;
