import * as Radio from '@radix-ui/react-radio-group';

import { joinClass } from '@/shared/libs/utils';

import style from './radioGroup.module.css';

type Data = {
  value: string;
  label?: string;
  defaultChecked?: boolean;
  onClick?: (value: string) => void;
};

type Props = {
  className?: string;
  data: Data[];
};

function RadioGroup({ data, className }: Props) {
  return (
    <Radio.Root className={joinClass(style.root, className)}>
      {data.map(({ value, label, onClick }) => (
        <Radio.Item
          value={value}
          key={value}
          id={value}
          className={style.radioContainer}
          onClick={onClick ? () => onClick(value) : undefined}
        >
          <div className={style.radioCircle}>
            <Radio.Indicator className={style.radioIndicator}>
              <div className={style.radioInnerIndicator}></div>
            </Radio.Indicator>
          </div>
          <label className={style.radioLabel} htmlFor={value}>
            {label ?? value}
          </label>
        </Radio.Item>
      ))}
    </Radio.Root>
  );
}

export default RadioGroup;
