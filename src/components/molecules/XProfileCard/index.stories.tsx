import type { Meta, StoryObj } from '@storybook/nextjs';
import XProfileCard from './index';
import * as useAppRootModule from '@/states/useAppRoot';
import { vi } from 'vitest';

const meta: Meta<typeof XProfileCard> = {
  title: 'Components/Molecules/XProfileCard',
  component: XProfileCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof XProfileCard>;

export const Default: Story = {
  render: () => {
    vi.spyOn(useAppRootModule, 'default').mockReturnValue({
      state: {
        portfolio: {
          profile: {
            name: '伊勢 功崇',
            imageUrl: '/assets/images/profile.jpg',
            message: '',
            twitter_follower: 7626,
            updated_at: '2026-07-17',
          },
          contacts: [
            {
              name: 'Twitter',
              linkUrl: 'https://twitter.com/ise0615/',
              icon: 'twitter',
            },
          ],
        },
      },
    } as ReturnType<typeof useAppRootModule.default>);

    return <XProfileCard />;
  },
};
