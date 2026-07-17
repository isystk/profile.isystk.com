import FlashMessage, { MessageTypes } from './index';
import type { Meta, StoryFn } from '@storybook/nextjs';

export default {
  title: 'Components/Interactions/FlashMessage',
  component: FlashMessage,
  tags: ['autodocs'],
} as Meta<typeof FlashMessage>;

export const WithMessage: StoryFn = () => (
  <FlashMessage message="これはフラッシュメッセージです。" />
);

export const ErrorMessage: StoryFn = () => (
  <FlashMessage message="これはエラーメッセージです。" type={MessageTypes.Error} />
);

// モジュール読み込み時に一度だけフィクスチャを設定する（コンポーネントのレンダー中に外部変数を変更しないため）
if (typeof window !== 'undefined') {
  window.laravelSession = {
    status: 'Laravel側のメッセージです',
  };
}

export const LaravelSessionMessage: StoryFn = () => <FlashMessage />;
