import RadioGroup from '@/shared/components/radio-group/radioGroup';

import style from './modalPageFourth.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

function ModalPageFourth({ ...props }: Props) {
  const data = [
    {
      value: '9+',
      label: '9+ hours',
    },
    {
      value: '7-8',
      label: '7-8 hours',
    },
    {
      value: '5-6',
      label: '5-6 hours',
    },
    {
      value: '3-4',
      label: '3-4 hours',
    },
    {
      value: '0-2',
      label: '0-2 hours',
    },
  ];

  return (
    <div className={style.container} {...props}>
      <h2 className={style.heading}>
        How many hours did you sleep last night?
      </h2>

      <RadioGroup className={style.radioGroup} data={data} />
    </div>
  );
}

export default ModalPageFourth;
