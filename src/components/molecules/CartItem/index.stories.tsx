import React from 'react';
import CartItem from './index';
import { JSX } from 'react';

const meta = {
  title: 'Components/Molecules/CartItem',
  component: CartItem,
  tags: ['autodocs'],
};
export default meta;

export const Default: { render: () => JSX.Element } = {
  render: () => {
    const props = {
      id: 1,
      name: 'テスト商品',
      imageUrl: 'https://laraec.isystk.com/uploads/stock/makaron.jpg',
      price: 1000,
      detail: 'この商品の説明です。',
      key: 1,
    };
    return <CartItem {...props} />;
  },
};
