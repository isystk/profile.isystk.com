import React from 'react';
import type { StoryFn } from '@storybook/react';
import ParallaxSticky from './index';

const meta = {
  title: 'Components/Interactions/ParallaxSticky',
  component: ParallaxSticky,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryFn = () => {
  return (
    <div className="overflow-auto">
      <p>スクロールして表示されます。</p>
      <div style={{ marginTop: '1000px' }}></div>
      <ParallaxSticky height="h-500vh">
        <div className="bg-gray-100" style={{ height: '100vh' }}>
          <p className="pt-5 text-center font-bold text-3xl">タイトル</p>
        </div>
      </ParallaxSticky>
      <div style={{ marginTop: '1000px' }}></div>
    </div>
  );
};
