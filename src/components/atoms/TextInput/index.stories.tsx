import { JSX, useState } from 'react';
import TextInput from './index';
import type { Meta, StoryFn } from '@storybook/nextjs';

export default {
  title: 'Components/Atoms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
} as Meta<typeof TextInput>;

export const Default: () => JSX.Element = () => {
  const [value, setValue] = useState('');
  return (
    <TextInput
      identity="email"
      controlType="text"
      label="メールアドレス"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const WithError: StoryFn = () => (
  <TextInput
    identity="email"
    controlType="text"
    label="メールアドレス"
    value=""
    error="このフィールドは必須です。"
    onChange={() => {}}
    required={true}
  />
);

// window.laravelErrors はレンダー前に呼び出し側（テストコード等）で設定する想定。
// コンポーネントのレンダー中に外部変数を変更しないよう、ここでは設定しない。
export const LaravelError: StoryFn = () => (
  <TextInput
    identity="email"
    controlType="text"
    label="メールアドレス"
    onChange={() => {}}
    required={true}
  />
);
