import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import SkillSection from './index';
import * as useAppRootModule from '@/states/useAppRoot';
import { vi } from 'vitest';

const meta: Meta<typeof SkillSection> = {
  title: 'Components/Molecules/SkillSection',
  component: SkillSection,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SkillSection>;

export const Default: Story = {
  render: () => {
    vi.spyOn(useAppRootModule, 'default').mockReturnValue({
      state: {
        portfolio: {
          skills: [
            {
              title: 'フロントエンド',
              color: 'yellow',
              rating: 5,
              text: 'フロントエンドの開発経験についての説明文です。',
              items: [
                {
                  name: 'React.js・Next.js',
                  rating: 4,
                  text: 'TypeScriptを用いた開発が得意です。',
                },
              ],
            },
            {
              title: 'PHP',
              color: 'blue',
              rating: 4,
              text: 'サーバーサイドの開発経験についての説明文です。',
              items: [
                {
                  name: 'Laravel',
                  rating: 4,
                  text: 'Laravelを用いたWebアプリケーション開発に従事しています。',
                },
              ],
            },
          ],
        },
      },
    } as ReturnType<typeof useAppRootModule.default>);

    return <SkillSection />;
  },
};
