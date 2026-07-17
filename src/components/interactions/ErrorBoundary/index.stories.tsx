import React from 'react';
import { JSX } from 'react';
import { ErrorBoundary } from './index';

const Bomb = (): JSX.Element => {
  throw new Error('テスト用のエラー');
};

const meta = {
  title: 'Components/Interactions/ErrorBoundary',
  component: ErrorBoundary,
  tags: ['autodocs'],
};
export default meta;

export const Default: { render: () => JSX.Element } = {
  render: () => (
    <ErrorBoundary>
      <p>正常なコンテンツ</p>
    </ErrorBoundary>
  ),
};

export const WithError: { render: () => JSX.Element } = {
  render: () => (
    <ErrorBoundary>
      <Bomb />
    </ErrorBoundary>
  ),
};
