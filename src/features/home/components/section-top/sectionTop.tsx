import arrowDownUrl from '@shared/assets/angle-down.svg';
import avatarUrl from '@shared/assets/avatar-placeholder.svg';
import iconUrl from '@shared/assets/logo.svg';

import ImageWrapper from '@/shared/ui/image-wrapper/imageWrapper';

type Props = {
  className: string;
};

function SectionTop({ className }: Props) {
  return (
    <div className={className}>
      <Logo />
      <Avatar />
    </div>
  );
}

export default SectionTop;

function Logo() {
  return (
    <div
      style={{
        width: '177px',
        height: '40px',
      }}
    >
      <ImageWrapper src={iconUrl} alt="icon" objectFit="contain" />
    </div>
  );
}

function Avatar() {
  return (
    <div
      style={{
        width: '42.5px',
        height: '42.5px',
        display: 'flex',
        flexDirection: 'row',
        columnGap: '10px',
      }}
    >
      <ImageWrapper src={avatarUrl} alt="icon" />
      <ImageWrapper src={arrowDownUrl} alt="icon" aspectRatio={0.4} />
    </div>
  );
}
