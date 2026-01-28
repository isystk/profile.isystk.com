import React from 'react';
import type { StoryFn } from '@storybook/react';
import Price from './index';

const meta = {
  title: 'Components/Molecules/Price',
  component: Price,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryFn = () => {
  return <Price />;
};
