import { createListCollection } from '@ark-ui/react/collection';
import unitDropdown from '@assets/units-dropdown-icon.svg';
import { normalizeProps, Portal, useMachine } from '@zag-js/react';
import * as select from '@zag-js/select';
import { useId } from 'react';

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

  const service = useMachine(select.machine, {
    id: useId(),
    collection,
    multiple: false,
    onValueChange(v) {
      onSelect?.(v.items[0] as T);
    },
  });

  const api = select.connect(service, normalizeProps);

  return (
    <div {...api.getRootProps()} className={className} {...props}>
      <div {...api.getControlProps()}>
        <button {...api.getTriggerProps()} className={style.button}>
          <span {...api.getLabelProps()} className={style.buttonLabel}>
            {api.valueAsString || label || 'Select option'}
          </span>
          <ImageWrapper
            src={unitDropdown}
            alt="dropdown-icon"
            className={style.buttonIcon}
          />
        </button>
      </div>

      <Portal>
        <div {...api.getPositionerProps()}>
          <ul {...api.getContentProps()} className={style.content}>
            {collection.items.map((item) => (
              <li
                key={collection.getItemValue(item)}
                {...api.getItemProps({ item })}
                className={style.contentItem}
              >
                <span className={style.contentItemLabel}>
                  {collection.stringifyItem(item)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Portal>
    </div>
  );
}

export default SingleDropdown;
