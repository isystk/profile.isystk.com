import React from 'react';
import type { StoryFn } from '@storybook/nextjs';
import MainVisual from './index';

const meta = {
  title: 'Components/Molecules/MainVisual',
  component: MainVisual,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryFn = () => {
  return <MainVisual />;
};
