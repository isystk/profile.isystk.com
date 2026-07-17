import type { Meta, StoryFn } from '@storybook/nextjs';
import SessionAlert from './index';

export default {
  title: 'Components/Atoms/SessionAlert',
  component: SessionAlert,
  tags: ['autodocs'],
} as Meta<typeof SessionAlert>;

// 各storyは window.laravelSession の内容が異なるため、
// レンダー前に呼び出し側（Storybookのdecoratorやテストコード）で設定する想定。
// コンポーネントのレンダー中に外部変数を変更しないよう、ここでは設定しない。
export const DefaultMessage: StoryFn = () => <SessionAlert target="success" />;

export const ResentMessage: StoryFn = () => <SessionAlert target="resent" />;

export const NoMessage: StoryFn = () => <SessionAlert target="missing" />;
