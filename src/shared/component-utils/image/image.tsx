import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './image.module.css';

type Props = {
  src: string;
  alt: string;
  aspectRatio?: number;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
};

const ImageWrapper = forwardRef(
  (
    {
      src,
      alt,
      aspectRatio = 1,
      className,
      objectFit = 'contain',
      ...props
    }: Props,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => (
    <div className={clsx(styles.wrapper, className)} ref={ref} {...props}>
      <img
        src={src}
        alt={alt}
        className={clsx(styles.image)}
        draggable="false"
        style={
          { objectFit, '--aspect-ratio': aspectRatio } as React.CSSProperties
        }
        loading="lazy"
      />
    </div>
  ),
);

export default ImageWrapper;
