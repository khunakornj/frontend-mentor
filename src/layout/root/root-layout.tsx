import { createListCollection } from '@ark-ui/react/collection';
import logoUrl from '@assets/logo.svg';
import logoText from '@assets/logo-text.svg';

import SingleDropdown from '@/components/presentation/single-dropdown/single-dropdown';
import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';

import style from './root-layout.module.scss';

type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  const dropdownCollection = createListCollection({
    items: [{ label: 'Monday', value: { id: 1, sId: '20' } }],
    itemToString: (v) => v.label,
    itemToValue: (v) => v.value.sId,
  });

  return (
    <div className={style.root}>
      <div className={style.headerTab}>
        <Logo />
        <SingleDropdown collection={dropdownCollection} />
      </div>

      {children}
    </div>
  );
}

function Logo() {
  return (
    <div className={style.headerLogo}>
      <ImageWrapper src={logoUrl} alt="logo" className={style.headerLogoImg} />
      <ImageWrapper
        aspectRatio={32 / 9}
        src={logoText}
        alt="logo"
        className={style.headerLogoText}
      />
    </div>
  );
}

export default RootLayout;
