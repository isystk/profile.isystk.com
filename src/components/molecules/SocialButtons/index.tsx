import React from 'react';
import styles from './styles.module.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa6';

export type SocialLink = {
  href: string;
  label: string;
  iconType: 'facebook' | 'twitter' | 'instagram' | 'github' | 'line';
};

export type Props = {
  links?: SocialLink[];
};

const iconMap = {
  facebook: <FaFacebook />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  github: <FaGithub />,
};

const SocialButtons = ({ links = [] }: Required<Props>) => {
  if (links.length === 0) return null;

  return (
    <div className={styles.socialContainer}>
      {links.map(({ href, label, iconType }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label={label}
        >
          {iconMap[iconType]}
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
