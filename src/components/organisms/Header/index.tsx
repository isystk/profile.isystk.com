'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Logo from '@/components/atoms/Logo';
import Link from 'next/link';
import { Url } from '@/constants/url';
import SideMenu from '@/components/organisms/SideMenu';
import useAppRoot from '@/states/useAppRoot';
import CSRFToken from '@/components/atoms/CSRFToken';

const Header = () => {
  const { state, service } = useAppRoot();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 100px 以上スクロールしたら表示
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!state || !service) return <></>;
  const { isLogined, name } = state.auth;

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
                <Link href={href} target="_blank">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <SideMenu text={isLogined ? `${name} 様` : ''} items={menuItems} />
      </nav>
      <form id="logout-form" action={Url.LOGOUT} method="POST">
        <CSRFToken />
      </form>
    </header>
  );
};

export default Header;
