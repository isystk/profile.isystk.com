'use client';
import styles from './styles.module.scss';
import React from 'react';
import ScrollIn from '@/components/interactions/ScrollIn';
import Image from '@/components/atoms/Image';
import ParallaxSticky from '@/components/interactions/ParallaxSticky';

const Features = () => {
  const layerComponent = (
    <>
      <ParallaxSticky height="200vh" top="200px">
        <div className={styles.featureBoxes}>
          <div className={styles.featureBoxWrapperRight}>
            <ScrollIn className={styles.featureCard} direction="left">
              <div className={styles.scrollCardRight}>
                <p className={styles.cardTitle}>シンプル操作で誰でも使える</p>
                <p>
                  トーク画面に話しかけるだけで、AIがすぐに返答。専門知識は一切不要。シニア層から学生まで幅広くご利用いただけます。
                </p>
              </div>
            </ScrollIn>
          </div>
          <div className={styles.featureBoxWrapperLeft}>
            <ScrollIn className={styles.featureCard} direction="right">
              <div className={styles.scrollCardLeft}>
                <Image
                  src="https://picsum.photos/600/400"
                  alt="dummy"
                  zoom={true}
                  className={styles.image}
                />
              </div>
            </ScrollIn>
          </div>
        </div>
      </ParallaxSticky>
      <ParallaxSticky height="200vh" top="200px">
        <div className={`${styles.featureBoxes} md:flex-row-reverse `}>
          <div className={styles.featureBoxWrapperLeft}>
            <ScrollIn className={styles.featureCard} direction="right">
              <div className={styles.scrollCardRight}>
                <p className={styles.cardTitle}>24時間いつでも対応</p>
                <p>
                  夜中でも休日でもOK。LINEでいつでも質問できるから、困ったときにすぐ解決できます。
                </p>
              </div>
            </ScrollIn>
          </div>
          <div className={styles.featureBoxWrapperRight}>
            <ScrollIn className={styles.featureCard} direction="left">
              <div className={styles.scrollCardLeft}>
                <Image
                  src="https://picsum.photos/600/400"
                  alt="dummy"
                  zoom={true}
                  className={styles.image}
                />
              </div>
            </ScrollIn>
          </div>
        </div>
      </ParallaxSticky>
      <ParallaxSticky height="200vh" top="200px">
        <div className={styles.featureBoxes}>
          <div className={styles.featureBoxWrapperRight}>
            <ScrollIn className={styles.featureCard} direction="left">
              <div className={styles.scrollCardRight}>
                <p className={styles.cardTitle}>高精度AIで安心の回答</p>
                <p>
                  最新のAI技術を搭載。生活のちょっとした疑問からビジネス相談まで、丁寧で的確な返答が可能です。
                </p>
              </div>
            </ScrollIn>
          </div>
          <div className={styles.featureBoxWrapperLeft}>
            <ScrollIn className={styles.featureCard} direction="right">
              <div className={styles.scrollCardLeft}>
                <Image
                  src="https://picsum.photos/600/400"
                  alt="dummy"
                  zoom={true}
                  className={styles.image}
                />
              </div>
            </ScrollIn>
          </div>
        </div>
      </ParallaxSticky>
      <ParallaxSticky height="160vh" top="200px">
        <div className={`${styles.featureBoxes} md:flex-row-reverse`}>
          <div className={styles.featureBoxWrapperLeft}>
            <ScrollIn className={styles.featureCard} direction="right">
              <div className={styles.scrollCardRight}>
                <p className={styles.cardTitle}>プライバシーにも配慮</p>
                <p>
                  個人情報やトーク内容はすべて暗号化し、安全に管理。安心してご利用いただけます。
                </p>
              </div>
            </ScrollIn>
          </div>
          <div className={styles.featureBoxWrapperRight}>
            <ScrollIn className={styles.featureCard} direction="left">
              <div className={styles.scrollCardLeft}>
                <Image
                  src="https://picsum.photos/600/400"
                  alt="dummy"
                  zoom={true}
                  className={styles.image}
                />
              </div>
            </ScrollIn>
          </div>
        </div>
      </ParallaxSticky>
    </>
  );

  return (
    <ParallaxSticky layerComponent={layerComponent} indicator={true} height="800vh">
      <div className={styles.features}>
        <div className={styles.inner}>
          <ScrollIn>
            <p className={styles.title}>特徴</p>
          </ScrollIn>
        </div>
      </div>
    </ParallaxSticky>
  );
};

export default Features;
