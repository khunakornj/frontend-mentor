import Header from './header/Header';
import InputDensity from './input-density/InputDensity';
import InputSection from './input-section/InputSection';
import InputSummary from './input-summary/InputSummary';
import Title from './title/Title';
import bg from '@assets/bg-dark-theme.png';
import { useState } from 'react';

function RootPage() {
  const [char, setChar] = useState('');

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

      <InputSection onType={(x) => setChar(x)} className="mb-ds600" />

      <InputSummary char={char} className="mb-ds300" />

      <InputDensity char={char} />
    </div>
  );
}

export default RootPage;
