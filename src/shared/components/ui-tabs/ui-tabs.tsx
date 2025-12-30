import { Tabs } from '@ark-ui/react/tabs';
import clsx from 'clsx';

import style from './ui-tabs.module.css';

type TabItem<T> = {
  label?: string;
  value: T;
};
type Props<T> = {
  items: TabItem<T>[];
  className?: string;
  onSelect?: (val: T) => void;
  defaultValue?: T;
};

function UiTabs<T extends string>({
  onSelect,
  className,
  items,
  defaultValue,
  ...props
}: Props<T>) {
  return (
    <Tabs.Root
      onValueChange={(v) => {
        const obj = v as TabItem<T>;
        onSelect?.(obj.value);
      }}
      className={clsx(style.root, className)}
      defaultValue={defaultValue}
      {...props}
    >
      <Tabs.List className={style.list}>
        {items.map((item) => (
          <Tabs.Trigger
            className={style.trigger}
            value={item.value}
            key={item.value}
          >
            {item.label || item.value}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}

export default UiTabs;
