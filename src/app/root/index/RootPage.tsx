import Header from './header/Header';
import InputDensity from './input-density/InputDensity';
import InputSection from './input-section/InputSection';
import InputSummary from './input-summary/InputSummary';
import Title from './title/Title';
import bg from '@assets/bg-dark-theme.png';
import { useState } from 'react';

function RootPage() {
  const [char, setChar] = useState('');
  const [isExcludeSpace, setIsExcludeSpace] = useState(false);

  return (
    <div
      className="py-ds400 min-h-screen bg-cover px-[225px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header className="mb-ds600" />

      <Title className="mb-ds600">
        Analyze your text
        <br /> in real-time.
      </Title>

      <InputSection
        char={char}
        isExcludeSpace={isExcludeSpace}
        onExludeSpaceChecked={(x) => setIsExcludeSpace(x)}
        onType={(x) => setChar(x)}
        className="mb-ds600"
      />

      <InputSummary
        isExcludeSpace={isExcludeSpace}
        char={char}
        className="mb-ds300"
      />

      <InputDensity isExcludeSpace={isExcludeSpace} char={char} />
    </div>
  );
}

export default RootPage;
