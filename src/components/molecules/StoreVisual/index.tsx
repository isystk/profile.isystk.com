'use client';
import styles from './styles.module.scss';
import Image from '@/components/atoms/Image';
import React from 'react';
import ScrollIn from '@/components/interactions/ScrollIn';
import iphoneImage from '@/assets/images/iphone.png';
import lineIconImage from '@/assets/images/icon_line.png';

const StoreVisual = () => {
  return (
    <div className={styles.mainVisual}>
      <div className={styles.visualContainer}>
        <div className={styles.imageWrapper}>
          <Image src={iphoneImage.src} className={styles.iphoneImage} alt="Line App" />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.textInner}>
            <ScrollIn delay="0s">
              <p className={styles.registerText}>リリース1ヶ月で100万人登録！</p>
            </ScrollIn>
            <ScrollIn delay="1s">
              <h1 className={styles.catchPhrase}>
                話題の○○が
                <br />
                LINEで使える！
              </h1>
            </ScrollIn>
            <ScrollIn delay="2s">
              <a href="#" className={styles.lineButton}>
                <img src={lineIconImage.src} width="50" height="50" alt="LINE icon" />
                <span className={styles.lineButtonText}>友達に追加して質問してみる</span>
              </a>
            </ScrollIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreVisual;
