'use client';
import styles from './styles.module.scss';
import React from 'react';
import ScrollIn from '@/components/interactions/ScrollIn';
import Image from '@/components/atoms/Image';
import ParallaxSticky from '@/components/interactions/ParallaxSticky';
import HorizontalRule from '@/components/atoms/HorizontalRule';
import useAppRoot from '@/states/useAppRoot';
import { Output } from '@/states/portfolio';
import { useIsMobile } from '@/hooks/useIsMobile';

const Features = () => {
  const { state } = useAppRoot();
  const isMobile = useIsMobile();

  const outputs = state?.portfolio?.outputs as Output[] | undefined;

  if (!outputs) return null;

  const stickyTop = isMobile ? '100px' : '250px';

  const layerComponent = (
    <>
      {outputs.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <ParallaxSticky key={index} height="200svh" top={stickyTop}>
            <div className={`${styles.featureBoxes} ${!isEven ? styles.reverse : ''}`}>
              <div className={styles.featureBoxWrapper}>
                <ScrollIn className={styles.featureCard} direction={isEven ? 'left' : 'right'}>
                  <div className={styles.textContent}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.titleLink}
                    >
                      <p className={styles.cardTitle}>{item.title}</p>
                    </a>
                    <p>{item.text}</p>
                    <div className={styles.linkWrapper}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.viewMoreBtn}
                      >
                        VIEW MORE
                        <span className={styles.arrow}>→</span>
                      </a>
                    </div>
                  </div>
                </ScrollIn>
              </div>

              {/* 画像エリア */}
              <div className={styles.featureBoxWrapper}>
                <ScrollIn
                  className={styles.featureCard}
                  direction={isEven ? 'right' : 'left'}
                  delay="0.5s"
                >
                  <div className={styles.imageContent}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.imageLink}
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        zoom={true}
                        className={styles.image}
                      />
                    </a>
                  </div>
                </ScrollIn>
              </div>
            </div>
          </ParallaxSticky>
        );
      })}
    </>
  );

  const totalHeight = `${outputs.length * 200}svh`;

  return (
    <ParallaxSticky layerComponent={layerComponent} indicator={true} height={totalHeight}>
      <div className={styles.features}>
        <div className={styles.inner}>
          <ScrollIn>
            <>
              <h2 className={styles.title}>OUTPUT</h2>
              <HorizontalRule />
            </>
          </ScrollIn>
        </div>
      </div>
    </ParallaxSticky>
  );
};

export default Features;
