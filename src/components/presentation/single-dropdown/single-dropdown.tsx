import { Portal } from '@ark-ui/react/portal';
import { createListCollection, Select } from '@ark-ui/react/select';
import unitDropdown from '@assets/units-dropdown-icon.svg';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';
import type { DropdownData } from '@/shared/common/types';

import style from './single-dropdown.module.scss';

type Props<T> = {
  label?: string;
  className?: string;
  items: DropdownData[];
  onSelect?: (v: T) => void;
};

function SingleDropdown<T>({
  className,
  label,
  items,
  onSelect,
  ...props
}: Props<T>) {
  const collection = createListCollection({
    items,
  });

  return (
    <Select.Root
      collection={collection}
      onValueChange={(v) => {
        onSelect?.(v.items[0] as T);
      }}
      className={className}
      {...props}
    >
      <Select.Control>
        <Select.Trigger className={style.button}>
          <Select.ValueText
            placeholder={label || 'Select option'}
            className={style.buttonLabel}
          />
          <ImageWrapper
            src={unitDropdown}
            alt="dropdown-icon"
            className={style.buttonIcon}
          />
        </Select.Trigger>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content className={style.content}>
            <Select.ItemGroup>
              {collection.items.map((item) => (
                <Select.Item
                  key={collection.getItemValue(item)}
                  item={item}
                  className={style.contentItem}
                >
                  <Select.ItemText className={style.contentItemLabel}>
                    {collection.stringifyItem(item)}
                  </Select.ItemText>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}

export default SingleDropdown;
