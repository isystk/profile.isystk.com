import type { Meta, StoryObj } from '@storybook/nextjs';
import CountUp from './index';

const meta: Meta<typeof CountUp> = {
  title: 'Components/Atoms/CountUp',
  component: CountUp,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof CountUp> = {
  args: {
    value: 7626,
  },
};
