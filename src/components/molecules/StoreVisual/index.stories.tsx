import React from 'react';
import type { StoryFn } from '@storybook/react';
import StoreVisual from './index';

const meta = {
  title: 'Components/Molecules/StoreVisual',
  component: StoreVisual,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryFn = () => {
  return <StoreVisual />;
};
