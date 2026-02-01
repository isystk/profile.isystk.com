'use client';

import React from 'react';
import styles from './styles.module.scss';
import ScrollIn from '@/components/interactions/ScrollIn';

const ThanksMessage = () => {
  return (
    <div className={styles.container}>
      <ScrollIn>
        <div className={styles.inner}>
          <h2 className={styles.message}>Thanks for visiting!</h2>
          <p className={styles.subMessage}>
            最後までご覧いただきありがとうございました。
            <br />
            お仕事のご依頼やご相談など、お気軽にお問い合わせください。
          </p>
        </div>
      </ScrollIn>
    </div>
  );
};

export default ThanksMessage;
