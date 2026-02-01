import React from 'react';
import SocialButtons from './index';
import { JSX } from 'react';

const meta = {
  title: 'Components/Molecules/SocialButtons',
  component: SocialButtons,
  tags: ['autodocs'],
};
export default meta;

export const Default: { render: () => JSX.Element } = {
  render: () => {
    const props = {
      links: [
        { iconType: 'facebook' as const, href: '#', label: 'Facebook' },
        { iconType: 'twitter' as const, href: '#', label: 'Twitter' },
        { iconType: 'instagram' as const, href: '#', label: 'Instagram' },
        { iconType: 'github' as const, href: '#', label: 'GitHub' },
        { iconType: 'line' as const, href: '#', label: 'LINE' },
      ],
    };
    return (
      <div style={{ backgroundColor: '#333', padding: '20px' }}>
        <SocialButtons {...props} />
      </div>
    );
  },
};
