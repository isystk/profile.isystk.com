import type { Meta, StoryFn } from '@storybook/nextjs';
import TextArea from './index';

export default {
  title: 'Components/Atoms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
} as Meta<typeof TextArea>;

export const Default: StoryFn = () => (
  <TextArea identity="message" label="お問い合わせ内容" defaultValue="初期値です" />
);

export const WithError: StoryFn = () => (
  <TextArea
    identity="message"
    label="お問い合わせ内容"
    error="必須項目です"
    value="エラーがあります"
  />
);

// window.laravelErrors はレンダー前に呼び出し側（テストコード等）で設定する想定。
// コンポーネントのレンダー中に外部変数を変更しないよう、ここでは設定しない。
export const LaravelError: StoryFn = () => (
  <TextArea
    identity="message"
    label="お問い合わせ内容"
    defaultValue="Laravelエラー対象"
    required={true}
  />
);
