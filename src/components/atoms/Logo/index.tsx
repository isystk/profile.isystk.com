import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { Url } from '@/constants/url';

export type Props = {
  hasLink?: boolean;
  text: string;
};

const Logo = ({ hasLink = true, ...props }: Props) => {
  return hasLink ? <LinkLogo {...props} /> : <NoLinkLogo {...props} />;
};

const LinkLogo = ({ text }: Props) => {
  return (
    <Link href={Url.TOP} className={`flex items-center ${styles.logo}`}>
      {text}
    </Link>
  );
};

const NoLinkLogo = ({ text }: Props) => {
  return <div className={`${styles.logo}`}>{text}</div>;
};

export default Logo;
