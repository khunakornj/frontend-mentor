import MainLogo from '@/shared/components/logo-home/LogoHome';
import facebook from '@assets/icon-facebook.svg';
import instagram from '@assets/icon-instagram.svg';
import twitter from '@assets/icon-twitter.svg';

const linkText: string[] = [
  'FAQs',
  'Privacy Policy',
  'Install Guide',
  'Contact Us',
  'Press Kit',
];

const logos: { src: string; alt: string }[] = [
  { src: facebook, alt: 'facebook' },
  { src: twitter, alt: 'twitter' },
  { src: instagram, alt: 'instagram' },
];

function Footer() {
  return (
    <footer className="bg-ds-gray-50 py-ds500 flex flex-row items-center justify-between px-[165px]">
      <MainLogo className="h-[55px] w-[55px] flex-none" />

      <div className="gap-x-ds800 grid grid-cols-3">
        {linkText.map((text) => (
          <a href="/" className="text-preset-7-regular text-ds-gray-700">
            {text}
          </a>
        ))}
      </div>

      <div className="gap-x-ds300 flex flex-none flex-row">
        {logos.map(({ src, alt }) => (
          <a href="/" className="h-[24px] w-[24px]">
            <img src={src} alt={alt} className="h-full w-full" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
