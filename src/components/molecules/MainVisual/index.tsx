'use client';
import styles from './styles.module.scss';
import React from 'react';
import ScrollIn from '@/components/interactions/ScrollIn';
import { FaChevronDown } from 'react-icons/fa6';

const MainVisual = () => {
  const scrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const start = window.scrollY;
    const targetPos = start + window.innerHeight;
    const startTime = performance.now();
    const duration = 500;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start + (targetPos - start) * ease);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  return (
    <div className={styles.visualContainer}>
      <div className={styles.textWrapper}>
        <div className={styles.textInner}>
          <ScrollIn delay="0s">
            <h1 className={styles.registerText}>ITエンジニアを活きる</h1>
          </ScrollIn>
          <ScrollIn delay="1s">
            <p className={styles.catchPhrase}>Yoshitaka Ise</p>
          </ScrollIn>
        </div>
      </div>

      <div className={styles.scrollWrapper}>
        <ScrollIn delay="2s">
          <a href="#" className={styles.scrollButton} onClick={scrollToNext}>
            <p>SCROLL</p>
            <FaChevronDown aria-hidden="true" />
          </a>
        </ScrollIn>
      </div>
    </div>
  );
};

export default MainVisual;
