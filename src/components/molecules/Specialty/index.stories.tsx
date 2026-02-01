import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Specialty from './index';
import * as useAppRootModule from '@/states/useAppRoot';
import { vi } from 'vitest';

const meta: Meta<typeof Specialty> = {
  title: 'Components/Molecules/Specialty',
  component: Specialty,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Specialty>;

export const Default: Story = {
  render: () => {
    // Storybook表示用にフックの戻り値をモック化
    vi.spyOn(useAppRootModule, 'default').mockReturnValue({
      state: {
        portfolio: {
          specialty: [
            {
              title: '適応範囲',
              items: [
                { label: 'フロントエンド', data: 90 },
                { label: 'バックエンド', data: 80 },
                { label: 'インフラ', data: 70 },
                { label: 'デザイン', data: 60 },
                { label: 'マネジメント', data: 85 },
              ],
            },
            {
              title: '得意言語',
              items: [
                { label: 'TypeScript', data: 40, color: '#007acc' },
                { label: 'React', data: 30, color: '#61dafb' },
                { label: 'PHP', data: 20, color: '#777bb4' },
                { label: 'Go', data: 10, color: '#00add8' },
              ],
            },
          ],
          contacts: [{ name: 'line', linkUrl: 'https://line.me/R/ti/p/@example' }],
        },
      },
    } as ReturnType<typeof useAppRootModule.default>);

    return (
      <div style={{ backgroundColor: '#000', padding: '20px' }}>
        <Specialty />
      </div>
    );
  },
};
