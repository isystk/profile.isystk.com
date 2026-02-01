import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Features from './index';
import * as useAppRootModule from '@/states/useAppRoot';
import { vi } from 'vitest';

const meta: Meta<typeof Features> = {
  title: 'Components/Molecules/Features',
  component: Features,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Features>;

export const Default: Story = {
  render: () => {
    vi.spyOn(useAppRootModule, 'default').mockReturnValue({
      state: {
        portfolio: {
          outputs: [
            {
              title: 'JSの学び舎',
              text: 'Javascriptに関する知識を発信しています。',
              url: 'https://example.com',
              imageUrl: 'https://picsum.photos/600/400',
            },
          ],
        },
      },
    } as ReturnType<typeof useAppRootModule.default>);

    return <Features />;
  },
};
