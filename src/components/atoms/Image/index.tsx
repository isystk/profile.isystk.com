import React from 'react';
import styles from './styles.module.scss';

type Props = {
  src: string;
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
  className,
  ...props
}: Props) => {
  return (
    <div className={`${className} ${styles.imageWrapper}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`${zoom ? styles.zoomableImage : ''}`}
        {...props}
      />
    </div>
  );
};

const NoDivImage = ({ src, alt = '', loading = 'lazy', className, ...props }: Props) => {
  return <img src={src} alt={alt} loading={loading} className={className} {...props} />;
};

export default Image;
