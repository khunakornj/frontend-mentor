import clsx from 'clsx';
import React from 'react';

import styles from './ImageWrapper.module.css';

type Props = {
  src: string;
  alt: string;
  aspectRatio?: number;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
};

const ImageWrapper = ({
  src,
  alt,
  aspectRatio = 1,
  className,
  objectFit = 'contain',
}: Props) => {
  return (
    <div
      className={clsx(styles.wrapper, className)}
      style={{ '--aspect-ratio': aspectRatio } as React.CSSProperties}
    >
      <img
        src={src}
        alt={alt}
        className={clsx(styles.image)}
        style={{ objectFit }}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWrapper;
