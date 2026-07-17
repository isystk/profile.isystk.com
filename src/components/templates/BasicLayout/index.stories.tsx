import React from 'react';
import type { StoryFn } from '@storybook/nextjs';
import BasicLayout from './index';

const meta = {
  title: 'Components/Templates/BasicLayout',
  component: BasicLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryFn = () => {
  return (
    <BasicLayout>
      <p>ページコンテンツ</p>
    </BasicLayout>
  );
};
