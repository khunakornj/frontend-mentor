import logoUrl from '@assets/logo.svg';
import logoText from '@assets/logo-text.svg';

import ImageWrapper from '@/shared/component-utils/image-wrapper/image-wrapper';
import SingleDropdown from '@/shared/components/dropdown/dropdown';

import style from './root-layout.module.scss';

type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <div className={style.root}>
      <div className={style.headerTab}>
        <Logo />
        <SingleDropdown data={[]} />
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
