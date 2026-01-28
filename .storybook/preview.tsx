import React from 'react';
import type { Preview } from '@storybook/nextjs';

import '@/assets/styles/app.scss';
import { AppProvider } from '@/states/AppContext';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

// RootコンポーネントをラップしてStorybook上に適用する
export const decorators = [
  (Story) => (
    <AppProvider>
      <Story />
    </AppProvider>
  ),
];

export const parameters: Preview['parameters'] = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  // デフォルトのViewportを設定する
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'responsive',
  },
};
