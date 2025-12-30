import { createListCollection, Portal, Select } from '@ark-ui/react';
import iconUrl from '@shared/assets/angle-down.svg';
import checkIcon from '@shared/assets/check.svg';
import ImageWrapper from '@shared/component-utils/image/image';
import clsx from 'clsx';

import style from './ui-select.module.css';

type Props<T> = {
  items: { value: T; label?: string; count?: number }[];
  onSelect?: (value: T) => void;
  onMultiSelect?: (value: T[]) => void;
  className?: string;
};

function UiSelect<T extends string | number>({
  items,
  onSelect,
  onMultiSelect,
  className,
}: Props<T>) {
  const collection = createListCollection({
    items,
  });

  return (
    <Select.Root
      collection={collection}
      className={clsx(style.root, className)}
      multiple
      positioning={{ placement: 'bottom-start' }}
      onSelect={(d) => {
        onSelect?.(d.value as T);
      }}
      onValueChange={(d) => {
        onMultiSelect?.(d.value as T[]);
      }}
    >
      {/* button */}
      <Select.Control>
        <Select.Trigger className={style.trigger}>
          <Select.ValueText className={style.triggerText}>
            All Categories
          </Select.ValueText>
          <Select.Indicator>
            <ImageWrapper
              src={iconUrl}
              alt="angle-down"
              className={style.triggerIcon}
            />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>

      {/* container */}
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup className={style.group}>
              {collection.items.map((item) => (
                <Select.Item
                  key={item.value}
                  item={item}
                  className={style.item}
                >
                  <div className={style.itemIndicator}>
                    <Select.ItemIndicator
                      className={style.itemIndicatorHighlight}
                    >
                      <ImageWrapper
                        src={checkIcon}
                        alt="highlight"
                        className={style.img}
                      />
                    </Select.ItemIndicator>
                  </div>
                  <Select.ItemText className={style.itemText}>
                    {item.label || item.value}
                  </Select.ItemText>
                  {item.count && (
                    <Select.ItemText className={style.itemCount}>
                      ({item.count})
                    </Select.ItemText>
                  )}
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>

      <Select.HiddenSelect />
    </Select.Root>
  );
}

export default UiSelect;
