import Button from '@/shared/components/button/button';
import RadioGroup from '@/shared/components/radio-group/radioGroup';
import TextInput from '@/shared/components/text-input/textInput';

import style from './indexPage.module.css';

function IndexPage() {
  return (
    <div className={style.container}>
      <TextInput />
      <Button buttonType="secondary" />
      <RadioGroup
        data={[
          { value: 'orange', label: 'Orange' },
          { value: 'apple', label: 'Apple' },
        ]}
      />
    </div>
  );
}

export default IndexPage;
