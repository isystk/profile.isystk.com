import React from 'react';
import { useState } from 'react';
import styles from './styles.module.scss';
import HamburgerButton from '@/components/atoms/HamburgerButton';
import Link from 'next/link';

type Props = {
  text: string;
  items: Array<{ text: string; href: string }>;
  className?: string;
};

const SideMenu = ({ text, items, className = '' }: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* ハンバーガーメニュー */}
      <HamburgerButton isOpen={isOpen} onClick={setOpen} className="menuBtn ml-auto" />
      {/* サイドメニュー */}
      <div className={`${styles.sideMenu} ${className} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.menuHeader}>
          <p>{text}</p>
        </div>
        <nav className={`sideMenu ${isOpen ? 'open' : ''}`}>
          <ul className={styles.menuList}>
            {items.map(({ text, href }, index) => (
              <li key={index} className={styles.menuItem}>
                <Link href={href} target="_blank">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* オーバーレイ */}
      <div
        className={`overlay ${styles.overlay} ${isOpen ? styles.visible : styles.hidden}`}
        onClick={() => setOpen(!isOpen)}
      ></div>
    </>
  );
};

export default SideMenu;
