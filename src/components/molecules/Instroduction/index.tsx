'use client';

import React from 'react';
import styles from './styles.module.scss';
import ScrollIn from '@/components/interactions/ScrollIn';
import Image from '@/components/atoms/Image';

const Introduction = () => {
  return (
    <section className={styles.introduction} id="introduction">
      <div className={styles.inner}>
        <ScrollIn>
          <h2 className={styles.title}>INTRODUCTION</h2>
        </ScrollIn>

        <div className={styles.contents}>
          <ScrollIn className={styles.textWrapper} delay="0.2s">
            <div className={styles.description}>
              <p>
                はじめまして。伊勢と申します。Webを中心にシステムエンジニアとして従事して18年程になります。
                <br />
                都内のSIerに入社後、常駐先でSESとして基本設計から製造/テスト、リリースまでウォーターフォール型のシステム開発を学び、Javaを中心に証券会社や保険会社などの基幹システム開発に携わりました。
              </p>
              <p>
                5年務めたのちSOHOとして独立、独立後はソーシャルゲーム開発やBtoCを中心としたWebアプリケーション開発に数多く携わり、React.jsやVue.jsなどフロントエンドの技術を学びました。
                <br />
                現在は、故郷の北海道（函館）に移住してフルリモートでシステムエンジニアに従事しております。バックエンドからフロントエンド、インフラ構築までフルスタックに対応しております。
              </p>
              <p className={styles.updateDate}>(2022年6月更新)</p>
            </div>
          </ScrollIn>

          <ScrollIn className={styles.imageWrapper} delay="0.4s">
            <div className={styles.imageInner}>
              <Image
                src="/assets/images/profile.jpg"
                alt="Profile"
                className={styles.profileImage}
              />
            </div>
          </ScrollIn>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
