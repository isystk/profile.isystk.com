import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { Url } from '@/constants/url';

export type Props = {
  hasLink?: boolean;
  text: string;
  className?: string;
};

const Logo = ({ hasLink = true, ...props }: Props) => {
  return hasLink ? <LinkLogo {...props} /> : <NoLinkLogo {...props} />;
};

const LinkLogo = ({ text, className }: Props) => {
  return (
    <Link href={Url.TOP} className={`flex items-center ${styles.logo} ${className}`}>
      {text}
    </Link>
  );
};

const NoLinkLogo = ({ text, className }: Props) => {
  return <div className={`${styles.logo} ${className}`}>{text}</div>;
};

export default Logo;
