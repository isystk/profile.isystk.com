import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import NewsSection from './index';
import * as useAppRootModule from '@/states/useAppRoot';
import { vi } from 'vitest';

const meta: Meta<typeof NewsSection> = {
  title: 'Components/Molecules/NewsSection',
  component: NewsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NewsSection>;

export const Default: Story = {
  render: () => {
    vi.spyOn(useAppRootModule, 'default').mockReturnValue({
      state: {
        portfolio: {
          news: [
            {
              title: 'ポートフォリオサイトを公開しました',
              text: 'Next.jsとTypeScriptを使用して作成した新しいポートフォリオサイトを公開しました。制作実績やスキルセットをまとめています。',
              date: '2026.02.01',
              url: 'https://example.com/news/1',
              imageUrl: 'https://picsum.photos/480/320?random=1',
            },
            {
              title: '新しいプロジェクトが完了しました',
              text: 'React19を活用した最新のWebアプリケーションの開発が完了しました。詳細は実績ページをご覧ください。',
              date: '2026.01.20',
              url: 'https://example.com/news/2',
              imageUrl: 'https://picsum.photos/480/320?random=2',
            },
          ],
        },
      },
    } as ReturnType<typeof useAppRootModule.default>);

    return <NewsSection />;
  },
};
