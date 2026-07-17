import type { Meta, StoryObj } from '@storybook/nextjs';
import XTimeline from './index';

const meta: Meta<typeof XTimeline> = {
  title: 'Components/Atoms/XTimeline',
  component: XTimeline,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof XTimeline> = {
  args: {
    handle: 'ise0615',
  },
};
