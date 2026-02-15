import React from 'react';
import type { Meta, StoryFn } from '@storybook/nextjs';
import Logo from './index';

export default {
  title: 'Components/Atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
} as Meta<typeof Logo>;

export const WithLink: StoryFn = () => <Logo hasLink={true} text="タイトル" />;
export const WithoutLink: StoryFn = () => <Logo hasLink={false} text="タイトル" />;
