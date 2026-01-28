import React, { useRef, useEffect, useState, JSX } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: JSX.Element;
  className?: string;
  delay?: string;
  direction?: 'left' | 'right' | 'bottom';
};

const ScrollIn = ({ children, className = '', delay = '0s', direction = 'bottom' }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100 && rect.bottom > 0) {
        // 画面内に入った → 表示
        setIsVisible(true);
      } else {
        // 画面外に出た → 非表示（リセット）
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // 初期チェック
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  const style = isVisible
    ? {
        animationDelay: delay,
      }
    : undefined;

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
