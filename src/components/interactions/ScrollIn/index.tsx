'use client';

import React, { useRef, useState, useEffect, JSX } from 'react';
import styles from './styles.module.scss';
import { useInView } from '@/hooks/useInView';

type Props = {
  children: JSX.Element;
  className?: string;
  delay?: string;
  direction?: 'left' | 'right' | 'bottom';
  key?: string | number;
};

const ScrollIn = ({ children, className = '', delay = '0s', direction = 'bottom' }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, '-100px');

  // 一度表示されたかどうかを保持する状態
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const style = hasAnimated ? { animationDelay: delay } : { opacity: 0 };

  return (
    <div
      ref={ref}
      className={`${className} ${styles.scrollInBase} ${
        hasAnimated ? styles.animated : ''
      } ${hasAnimated ? styles[direction] : ''}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollIn;
