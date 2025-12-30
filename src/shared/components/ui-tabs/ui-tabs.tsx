import { Tabs } from '@base-ui/react/tabs';
import clsx from 'clsx';
import { forwardRef } from 'react';

import style from './ui-tabs.module.css';

type TabItem = {
  label?: string;
  value: string;
};
type Props = {
  items: TabItem[];
  className?: string;
  onSelect?: (val: string) => void;
};

const UiTabs = forwardRef(
  (
    { onSelect, className, items, ...props }: Props,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Tabs.Root
        ref={ref}
        {...props}
        onValueChange={(v: TabItem) => onSelect?.(v.value)}
        className={clsx(style.root, className)}
      >
        <Tabs.List className={style.list}>
          {items.map((item) => (
            <Tabs.Tab
              className={style.trigger}
              value={item.value}
              key={item.value}
            >
              {item.label || item.value}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs.Root>
    );
  },
);

export default UiTabs;
