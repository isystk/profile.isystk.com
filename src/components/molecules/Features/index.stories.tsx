import React from 'react';
import type { StoryFn } from '@storybook/react';
import Features from './index';

const meta = {
  title: 'Components/Molecules/Features',
  component: Features,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryFn = () => {
  return <Features />;
};
