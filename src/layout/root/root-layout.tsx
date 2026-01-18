import logoUrl from '@assets/logo.svg';
import logoText from '@assets/logo-text.svg';

import ImageWrapper from '@/components/util/image-wrapper/image-wrapper';

import style from './root-layout.module.scss';
import UnitDropdown from './unit-dropdown/unit-dropdown';

type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <div className={style.root}>
      <div className={style.headerTab}>
        <Logo />
        <UnitDropdown />
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
