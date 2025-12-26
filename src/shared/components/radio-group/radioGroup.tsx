import * as Radio from '@radix-ui/react-radio-group';

import { joinClass } from '@/shared/libs/utils';

import style from './radioGroup.module.css';

type Data = {
  value: string;
  label?: string;
  defaultChecked?: boolean;
};

type Props = {
  className?: string;
  data: Data[];
  onRadioChange?: (val: string) => void;
};

function RadioGroup({ data, className, onRadioChange, ...props }: Props) {
  return (
    <Radio.Root
      {...props}
      className={joinClass(style.root, className)}
      onValueChange={(val) => {
        onRadioChange?.(val);
      }}
    >
      {data.map(({ value, label }) => (
        <Radio.Item
          value={value}
          key={value}
          id={value}
          className={style.radioContainer}
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
