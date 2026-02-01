import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ThanksMessage from './index';

const meta: Meta<typeof ThanksMessage> = {
  title: 'Components/Molecules/ThanksMessage',
  component: ThanksMessage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ThanksMessage>;

export const Default: Story = {
  render: () => (
    <div style={{ paddingTop: '50vh', paddingBottom: '50vh' }}>
      <p style={{ textAlign: 'center', color: '#ccc' }}>Scroll down to see the message</p>
      <ThanksMessage />
    </div>
  ),
};
