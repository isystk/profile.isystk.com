import type { Meta, StoryFn } from '@storybook/nextjs';
import SelectBox from './index';

export default {
  title: 'Components/Atoms/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
} as Meta<typeof SelectBox>;

const options = [
  { label: 'オプション1', value: 'option1' },
  { label: 'オプション2', value: 'option2' },
  { label: 'オプション3', value: 'option3' },
];

export const Default: StoryFn = () => (
  <SelectBox identity="select-box" label="選択肢" options={options} required={false} />
);

export const WithError: StoryFn = () => (
  <SelectBox
    identity="select-box"
    label="選択肢"
    options={options}
    error="このフィールドは必須です。"
    required={true}
  />
);

// window.laravelErrors はレンダー前に呼び出し側（テストコード等）で設定する想定。
// コンポーネントのレンダー中に外部変数を変更しないよう、ここでは設定しない。
export const WithLaravelError: StoryFn = () => (
  <SelectBox identity="select-box" label="選択肢" options={options} required={true} />
);
