'use client';
import styles from './styles.module.scss';
import React from 'react';
import ScrollIn from '@/components/interactions/ScrollIn';
import lineIconImage from '@/assets/images/icon_line.png';

const Price = () => {
  return (
    <div className={styles.priceContainer}>
      <div className={styles.priceInner}>
        <ScrollIn>
          <p className={styles.title}>PRICE</p>
        </ScrollIn>
        <div className={styles.priceBoxes}>
          <div className={styles.priceBoxWrapperLeft}>
            <ScrollIn className={styles.scrollCardLeft}>
              <div className={styles.priceCard}>
                <p className={styles.cardDescription}>チャット回数制限あり</p>
                <p className={styles.cardPrice}>無料</p>
              </div>
            </ScrollIn>
          </div>
          <div className={styles.priceBoxWrapperRight}>
            <ScrollIn className={styles.scrollCardRight}>
              <div className={styles.priceCard}>
                <p className={styles.cardDescription}>チャット無制限</p>
                <div className={styles.paidPrices}>
                  <p className={styles.priceText}>
                    <span className={styles.priceLabel}>月額</span>
                    ¥980
                  </p>
                  <p className={styles.priceText}>
                    <span className={styles.priceLabel}>年額</span>
                    ¥9,800
                  </p>
                </div>
              </div>
            </ScrollIn>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <a href="#" className={styles.lineButton}>
            <img src={lineIconImage.src} width="50" height="50" alt="LINE icon" />
            <span className={styles.lineButtonText}>友達に追加して質問してみる</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Price;
