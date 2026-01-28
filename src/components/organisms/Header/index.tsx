'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Logo from '@/components/atoms/Logo';
import Link from 'next/link';
import { Url } from '@/constants/url';
import SideMenu from '@/components/organisms/SideMenu';
import CSRFToken from '@/components/atoms/CSRFToken';
import useAppRoot from '@/states/useAppRoot';

type Props = {
  isHideTop?: boolean;
};

const Header = ({ isHideTop = false }: Props) => {
  const { state, service } = useAppRoot();
  // フラグが true なら初期値を true にする
  const [isVisible, setIsVisible] = useState(!isHideTop);

  useEffect(() => {
    // 常に表示する場合はスクロール監視をしない
    if (!isHideTop) return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [!isHideTop]);

  if (!state || !service) return <></>;

  const menuItems = [
    { text: 'ブログ', href: Url.Blog },
    { text: '事業概要', href: Url.Compony },
    { text: 'お問い合わせ', href: Url.Contact },
  ];

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : ''} shadow-sm`}>
      <nav className="flex flex-wrap items-center justify-between px-4 py-3">
        <Logo text="isystk's Portfolio" />
        <div className={`${styles.menuContainer} hidden md:flex`}>
          <ul className={styles.menuList}>
            {menuItems.map(({ text, href }) => (
              <li key={href} className={styles.menuItem}>
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <SideMenu text="" items={menuItems} />
      </nav>
      <form id="logout-form" action={Url.LOGOUT} method="POST">
        <CSRFToken />
      </form>
    </header>
  );
};

export default Header;
