'use client';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import Image from '@/components/atoms/Image';
import { Url } from '@/constants/url';
import useAppRoot from '@/states/useAppRoot';
import React from 'react';

export type Props = {
  id: number;
  name: string;
  imageUrl: string;
  price: string | number;
  detail: string;
  quantity: number;
  isLike: boolean;
  key?: number;
};

const StockItem = ({ id, name, imageUrl, price, detail, quantity, isLike }: Props) => {
  const { state, service } = useAppRoot();
  const router = useRouter();

  if (!state || !service) return <></>;

  const handleLikeClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLike) {
      await service.like.removeLikeAsync(id);
    } else {
      await service.like.addLikeAsync(id);
    }
  };

  const handleAddToCart = async () => {
    if (!state.auth.isLogined) {
      router.push(Url.LOGIN);
      return;
    }
    await service.cart.addCart(id);
    router.push(Url.MYCART);
  };

  return (
    <div className={styles.cardItem}>
      <div className="text-right mb-2">
        <button
          className={`btn btn-sm ${isLike ? 'btn-primary' : 'btn-secondary'}`}
          data-id={id}
          onClick={handleLikeClick}
        >
          気になる
        </button>
      </div>
      <Image src={imageUrl} width={276} height={184} alt={name} className="mb-2 w-100" />
      <p className="font-bold">{name}</p>
      <p className="text-red-600">{price}</p>
      <p>{detail}</p>
      <button
        className={`btn btn-sm text-center mx-auto mt-auto ${
          quantity === 0 ? 'btn-secondary disabled' : 'btn-danger'
        }`}
        onClick={handleAddToCart}
        disabled={quantity === 0}
      >
        カートに入れる（残り{quantity}個）
      </button>
    </div>
  );
};

export default StockItem;
