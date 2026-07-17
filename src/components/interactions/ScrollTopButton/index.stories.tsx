import React from 'react';
import ScrollTopButton from './index';
import type { StoryFn } from '@storybook/nextjs';

const meta = {
  title: 'Components/Interactions/ScrollTopButton',
  component: ScrollTopButton,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryFn = () => {
  return (
    <div style={{ height: '1000px', padding: '16px' }}>
      <p>スクロールしてボタンが表示されるのを確認してください。</p>
      <ScrollTopButton />
    </div>
  );
};

export const Dark: StoryFn = () => {
  return (
    <div style={{ height: '1000px', padding: '16px', background: '#222' }}>
      <p>スクロールしてボタンが表示されるのを確認してください。</p>
      <ScrollTopButton theme="dark" />
    </div>
  );
};
