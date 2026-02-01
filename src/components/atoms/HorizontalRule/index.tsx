'use client';

import React, { useRef } from 'react';
import styles from './styles.module.scss';
import { useInView } from '@/hooks/useInView';

type Props = {
  variant?: 'blue' | 'white';
};

const HorizontalRule = ({ variant = 'blue' }: Props) => {
  const ref = useRef<HTMLHRElement>(null);
  const isInView = useInView(ref);

  return (
    <hr
      ref={ref}
      className={`${styles.hr} ${styles[variant]} ${isInView ? styles.centerToSide : ''}`}
    />
  );
};

export default HorizontalRule;
