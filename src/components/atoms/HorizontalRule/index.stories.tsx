import type { Meta, StoryObj } from '@storybook/nextjs';
import HorizontalRule from './index';

const meta: Meta<typeof HorizontalRule> = {
  title: 'Components/Atoms/HorizontalRule',
  component: HorizontalRule,
  tags: ['autodocs'],
};

export default meta;

export const Blue: StoryObj<typeof HorizontalRule> = {
  args: {
    variant: 'blue',
  },
};

export const White: StoryObj<typeof HorizontalRule> = {
  args: {
    variant: 'white',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
