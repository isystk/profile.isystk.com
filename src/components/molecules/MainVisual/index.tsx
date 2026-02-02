'use client';
import styles from './styles.module.scss';
import React from 'react';
import ScrollIn from '@/components/interactions/ScrollIn';
import { FaChevronDown } from 'react-icons/fa6';
import { useIsMobile } from '@/hooks/useIsMobile';

const MainVisual = () => {
  const isMobile = useIsMobile();
  const scrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = 'introduction';
    const targetElement = document.getElementById(targetId);
    // ヘッダー要素を取得（idやタグ名、クラス名などで指定）
    const headerElement = document.querySelector('header');
    if (!targetElement) return;

    // ヘッダーの高さを取得（存在しない場合は0）
    const headerHeight = headerElement?.offsetHeight || 0;

    const rect = targetElement.getBoundingClientRect();
    // ヘッダーの高さ分を差し引いてターゲット位置を計算
    const targetPos = rect.top + window.scrollY - headerHeight;

    const start = window.scrollY;
    const startTime = performance.now();
    const duration = 500;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      window.scrollTo(0, start + (targetPos - start) * ease);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
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
          <a href="#" className={styles.scrollButton} onClick={isMobile ? () => {} : scrollToNext}>
            <p>SCROLL</p>
            <FaChevronDown aria-hidden="true" />
          </a>
        </ScrollIn>
      </div>
    </div>
  );
};

export default MainVisual;
