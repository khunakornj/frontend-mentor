import unitDropdown from '@assets/units-dropdown-icon.svg';
import { normalizeProps, Portal, useMachine } from '@zag-js/react';
import * as select from '@zag-js/select';
import { useId } from 'react';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';

import style from './dropdown.module.scss';

type SelectData = {
  label: string;
  value: string;
};

const selectData: SelectData[] = [
  { label: 'Monday', value: 'NG' },
  { label: 'Tuesday', value: 'JP' },
  { label: 'Wednesday', value: 'KO' },
  { label: 'Thursday', value: 'KE' },
  { label: 'Friday', value: 'UK' },
  { label: 'Saturday', value: 'GH' },
  { label: 'Sunday', value: 'UG' },
];

type Props = {
  label?: string;
  className?: string;
  data: SelectData[];
  onSelect?: (v: string) => void;
};

function SingleDropdown({ className, label, onSelect, ...props }: Props) {
  const collection = select.collection({
    items: selectData,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
  });

  const service = useMachine(select.machine, {
    id: useId(),
    collection,
    multiple: false,
    onValueChange(v) {
      onSelect?.(v.value[0] as string);
    },
  });

  const api = select.connect(service, normalizeProps);

  return (
    <div {...api.getRootProps()} className={className} {...props}>
      <div {...api.getControlProps()}>
        <button {...api.getTriggerProps()} className={style.button}>
          <label {...api.getLabelProps()} className={style.buttonLabel}>
            {api.valueAsString || label || 'Select option'}
          </label>
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
            {selectData.map((item) => (
              <li
                key={item.value}
                {...api.getItemProps({ item })}
                className={style.contentItem}
              >
                <span className={style.contentItemLabel}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Portal>
    </div>
  );
}

export default SingleDropdown;
