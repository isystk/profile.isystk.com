import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Introduction from './index';

const meta: Meta<typeof Introduction> = {
  title: 'Components/Molecules/Introduction',
  component: Introduction,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryFn = () => {
  return <Introduction />;
};
