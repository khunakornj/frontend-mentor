import Button from '@/shared/components/button/button';
import Checkbox from '@/shared/components/checkbox/checkbox';
import TextInput from '@/shared/components/text-input/textInput';

import style from './indexPage.module.css';

function IndexPage() {
  return (
    <div className={style.container}>
      <TextInput />
      <Button buttonType="secondary" />
      <Checkbox value="tag" />
    </div>
  );
}

export default IndexPage;
