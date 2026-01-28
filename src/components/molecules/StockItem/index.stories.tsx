import React from 'react';
import StockItem from './index';
import { JSX, useEffect } from 'react';
import useAppRoot from '@/states/useAppRoot';
import { User } from '@/states/auth';

const meta = {
  title: 'Components/Molecules/StockItem',
  component: StockItem,
  tags: ['autodocs'],
};
export default meta;

export const Default: { render: () => JSX.Element } = {
  render: () => {
    const Component = () => {
      const { state } = useAppRoot();
      if (!state) return <></>;

      const props = {
        id: 1,
        name: 'テスト商品',
        imageUrl: 'https://laraec.isystk.com/uploads/stock/makaron.jpg',
        price: 1500,
        detail: '商品の説明文が入ります。',
        quantity: 3,
        isLike: false,
      };

      return <StockItem {...props} />;
    };
    return <Component />;
  },
};

export const Logined: { render: () => JSX.Element } = {
  render: () => {
    const Component = () => {
      const { state, service } = useAppRoot();

      useEffect(() => {
        if (!service) {
          return;
        }

        service.auth.setUser({
          id: 1,
          name: 'ユーザー名',
          email: 'test@test.com',
          email_verified_at: '2020-01-01 00:00:00',
        } as User);
      }, [service]);

      const props = {
        id: 1,
        name: 'テスト商品',
        imageUrl: 'https://laraec.isystk.com/uploads/stock/makaron.jpg',
        price: 1500,
        detail: '商品の説明文が入ります。',
        quantity: 3,
        isLike: false,
      };

      if (!state || !service) {
        return <></>;
      }

      return <StockItem {...props} />;
    };
    return <Component />;
  },
};
