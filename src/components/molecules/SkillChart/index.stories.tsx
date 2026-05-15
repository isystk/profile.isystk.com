import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import SkillChart from './index';

const meta: Meta<typeof SkillChart> = {
  title: 'Components/Atoms/SkillChart',
  component: SkillChart,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SkillChart>;

export const RadarChart: Story = {
  args: {
    title: '適応範囲',
    type: 'radar',
    data: {
      labels: ['フロントエンド', 'バックエンド', 'デザイン'],
      datasets: [
        {
          label: 'スキルレベル',
          data: [80, 70, 60],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
        },
      ],
    },
  },
  render: args => (
    <div style={{ backgroundColor: '#333', padding: '20px', width: '400px', height: '400px' }}>
      <SkillChart {...args} />
    </div>
  ),
};

export const DoughnutChart: Story = {
  args: {
    title: '使用言語',
    type: 'doughnut',
    data: {
      labels: ['TypeScript', 'React', 'Go'],
      datasets: [
        {
          data: [50, 30, 20],
          backgroundColor: ['#007acc', '#61dafb', '#00add8'],
        },
      ],
    },
  },
  render: args => (
    <div style={{ backgroundColor: '#333', padding: '20px', width: '400px', height: '400px' }}>
      <SkillChart {...args} />
    </div>
  ),
};
