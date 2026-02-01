import React from 'react';
import styles from './styles.module.scss';
import Logo from '@/components/atoms/Logo';
import SocialButtons, { SocialLink } from '@/components/molecules/SocialButtons';
import useAppRoot from '@/states/useAppRoot';

const Footer = () => {
  const { state } = useAppRoot();
  const contacts = state?.portfolio?.contacts;

  if (!contacts) return null;

  const links: SocialLink[] = contacts.map(
    contact =>
      ({
        href: contact.linkUrl,
        label: contact.name === 'Twitter' ? 'X(Twitter)' : contact.name,
        iconType: contact.icon,
      }) as SocialLink,
  );

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
