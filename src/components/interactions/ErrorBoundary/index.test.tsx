import { describe, it, expect, vi, beforeAll, afterAll, type MockInstance } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

const { Default, WithError } = composeStories(stories);

describe('ErrorBoundary', () => {
  let consoleErrorSpy: MockInstance;

  beforeAll(() => {
    // React がエラーバウンダリ発火時に出力するログを抑制する
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
  });

  it('エラーが発生していない場合は子要素をそのまま表示すること', () => {
    render(<Default />);
    expect(screen.getByText('正常なコンテンツ')).toBeInTheDocument();
  });

  it('子要素でエラーが発生した場合は500エラーページを表示すること', () => {
    render(<WithError />);
    expect(screen.getByText(/500 - サーバーエラーが発生しました/)).toBeInTheDocument();
  });
});
