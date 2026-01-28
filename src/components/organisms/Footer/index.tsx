import React from 'react';
import styles from './styles.module.scss';
import Logo from '@/components/atoms/Logo';
import SocialButtons, { SocialLink } from '@/components/molecules/SocialButtons';

const Footer = () => {
  const links: SocialLink[] = [
    {
      href: 'https://www.facebook.com/ise0615/',
      label: 'Facebook',
      iconType: 'facebook',
    },
    {
      href: 'https://x.com/ise0615/',
      label: 'X(Twitter)',
      iconType: 'twitter',
    },
    {
      href: 'https://www.instagram.com/isystk/',
      label: 'Instagram',
      iconType: 'instagram',
    },
    {
      href: 'https://github.com/isystk/',
      label: 'GitHub',
      iconType: 'github',
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <SocialButtons links={links} />
        <div className={styles.footerCopy}>
          <small>© 2026</small>
          <Logo hasLink={false} text="isystk's Portfolio" className={styles.footerLogo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
