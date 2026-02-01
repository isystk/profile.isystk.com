import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Footer from './index';
import * as useAppRootModule from '@/states/useAppRoot';
import { vi } from 'vitest';

const meta: Meta<typeof Footer> = {
  title: 'Components/Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => {
    vi.spyOn(useAppRootModule, 'default').mockReturnValue({
      state: {
        portfolio: {
          contacts: [
            { name: 'Facebook', linkUrl: 'https://facebook.example.com/dummy', icon: 'facebook' },
            { name: 'Twitter', linkUrl: 'https://twitter.example.com/dummy', icon: 'twitter' },
            {
              name: 'Instagram',
              linkUrl: 'https://instagram.example.com/dummy',
              icon: 'instagram',
            },
            { name: 'GitHub', linkUrl: 'https://github.example.com/dummy', icon: 'github' },
          ],
        },
      },
    } as ReturnType<typeof useAppRootModule.default>);

    return <Footer />;
  },
};
