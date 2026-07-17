import { useState } from 'react';
import ImageInput from './index';
import type { Meta, StoryFn } from '@storybook/nextjs';

export default {
  title: 'Components/Atoms/ImageInput',
  component: ImageInput,
  tags: ['autodocs'],
} as Meta<typeof ImageInput>;

export const Default: StoryFn = () => {
  const [value] = useState('');
  return (
    <ImageInput
      identity="profile_picture"
      label="プロフィール画像"
      value={value}
      noImage="/assets/images/no_image.png"
    />
  );
};

export const WithError: StoryFn = () => (
  <ImageInput
    identity="profile_picture"
    label="プロフィール画像"
    value=""
    error="画像は必須です"
    required={true}
  />
);

// window.laravelErrors はレンダー前に呼び出し側（テストコード等）で設定する想定。
// コンポーネントのレンダー中に外部変数を変更しないよう、ここでは設定しない。
export const WithLaravelError: StoryFn = () => (
  <ImageInput identity="profile_picture" label="プロフィール画像" value="" required={true} />
);

export const WithPreview: StoryFn = () => {
  const [value] = useState('');
  return <ImageInput identity="profile_picture" label="プロフィール画像" value={value} />;
};
