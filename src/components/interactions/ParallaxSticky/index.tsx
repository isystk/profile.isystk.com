'use client';
import React, { JSX, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: JSX.Element;
  layerComponent?: JSX.Element;
  height: string; // スクロール領域の高さを指定する。例：'100vh'
  top?: string; // 画面を固定するtopを指定する。
  className?: string;
  indicator?: boolean; // インジケーターを表示する場合はTrueを設定する
};

const ParallaxSticky = ({
  children,
  layerComponent,
  height,
  top = '0',
  className,
  indicator,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const percent = Math.min(
        100,
        Math.max(0, ((scrollTop - containerTop) / (containerHeight - windowHeight)) * 100),
      );

      setScrollPercent(percent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期化（0%）

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={`${styles.inn} ${className ?? ''}`} style={{ height }}>
      {layerComponent}
      <div className={styles.parallaxBg}>
        <div className={styles.bg} style={{ top }}>
          {indicator && (
            <div className={styles.scrollBarWrapper}>
              <div className={styles.scrollBarTrack}>
                <div
                  className={styles.scrollBarThumb}
                  style={{ height: `${scrollPercent}%` }}
                ></div>
              </div>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default ParallaxSticky;
