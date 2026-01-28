import React from 'react';
import type { StoryFn } from '@storybook/react';
import News from './index';

const meta = {
  title: 'Components/Molecules/News',
  component: News,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryFn = () => {
  return (
    <News
      items={[
        {
          date: '2025.01.01',
          title: 'タイトル1',
          text: 'テキストテキストテキストテキストテキストテキスト',
          imageUrl: 'https://picsum.photos/200/300',
        },
        {
          date: '2025.02.01',
          title: 'タイトル2',
          text: 'テキストテキストテキストテキストテキストテキスト',
          imageUrl: 'https://picsum.photos/200/300',
        },
      ]}
    />
  );
};
