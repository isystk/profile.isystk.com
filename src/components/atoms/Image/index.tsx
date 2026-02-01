import React from 'react';
import { StaticImageData } from 'next/image';
import styles from './styles.module.scss';

type Props = {
  src: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  className?: string;
  zoom?: boolean;
};

const Image = ({ zoom = false, ...props }: Props) => {
  return zoom ? <DivImage {...props} zoom={zoom} /> : <NoDivImage {...props} />;
};

const DivImage = ({
  src,
  alt = '',
  loading = 'lazy',
  zoom = false,
  className = '',
  ...props
}: Props) => {
  // src が存在しない場合のガードを追加
  const imgSrc = typeof src === 'string' ? src : (src?.src ?? '');

  return (
    <div className={`${className} ${styles.imageWrapper}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc}
        alt={alt}
        loading={loading}
        className={`${zoom ? styles.zoomableImage : ''}`}
        {...props}
      />
    </div>
  );
};

const NoDivImage = ({ src, alt = '', loading = 'lazy', className = '', ...props }: Props) => {
  // src が存在しない場合のガードを追加
  const imgSrc = typeof src === 'string' ? src : (src?.src ?? '');

  return <img src={imgSrc} alt={alt} loading={loading} className={className} {...props} />;
};

export default Image;
