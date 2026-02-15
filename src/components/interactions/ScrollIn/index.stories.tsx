import React from 'react';
import type { StoryFn } from '@storybook/react';
import ScrollIn from './index';

const meta = {
  title: 'Components/Interactions/ScrollIn',
  component: ScrollIn,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryFn = () => {
  return (
    <div style={{ height: '2000px', padding: '16px' }}>
      <p>スクロールしてアニメーションが適用されるのを確認してください。</p>
      <div style={{ marginTop: '1000px' }}>
        <ScrollIn>
          <div
            style={{
              width: '200px',
              height: '100px',
              background: '#4caf50',
              color: '#fff',
              padding: '16px',
            }}
          >
            スクロールして表示されます
          </div>
        </ScrollIn>
      </div>
    </div>
  );
};

export const WithDelay: StoryFn = () => {
  return (
    <div style={{ height: '2000px', padding: '16px' }}>
      <div style={{ marginTop: '1000px' }}>
        <ScrollIn delay="1s">
          <div
            style={{
              width: '200px',
              height: '100px',
              background: '#2196f3',
              color: '#fff',
              padding: '16px',
            }}
          >
            1秒遅れて表示されます
          </div>
        </ScrollIn>
      </div>
    </div>
  );
};
