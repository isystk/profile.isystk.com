import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import HamburgerButton from './index';

export default {
  title: 'Components/Atoms/HamburgerButton',
  component: HamburgerButton,
  tags: ['autodocs'],
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false,
    },
  },
} as Meta<typeof HamburgerButton>;

export const Default: StoryObj<typeof HamburgerButton> = {
  render: args => <HamburgerButton {...args} />,
  args: {
    isOpen: false,
    onClick: open => console.log(`Hamburger is now ${open ? 'open' : 'closed'}`),
  },
};
