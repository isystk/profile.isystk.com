'use client';

import React, { useRef, JSX } from 'react';
import styles from './styles.module.scss';
import { useInView } from '@/hooks/useInView';

type Props = {
  children: JSX.Element;
  className?: string;
  delay?: string;
  direction?: 'left' | 'right' | 'bottom';
};

const ScrollIn = ({ children, className = '', delay = '0s', direction = 'bottom' }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, '-100px');

  const style = isVisible ? { animationDelay: delay } : undefined;

  return (
    <div
      ref={ref}
      className={`${className} ${styles.scrollInBase} ${
        isVisible ? styles.animated : ''
      } ${isVisible ? styles[direction] : ''}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollIn;
