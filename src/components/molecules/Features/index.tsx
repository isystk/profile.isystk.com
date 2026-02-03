'use client';
import styles from './styles.module.scss';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from '@/components/atoms/Image';
import ParallaxSticky from '@/components/interactions/ParallaxSticky';
import HorizontalRule from '@/components/atoms/HorizontalRule';
import useAppRoot from '@/states/useAppRoot';
import { Output } from '@/states/portfolio';
import { useIsMobile } from '@/hooks/useIsMobile';

interface FeatureItemProps {
  item: Output;
  index: number;
  stickyTop: string;
}

const FeatureItem = ({ item, index, stickyTop }: FeatureItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [isEven ? -300 : 300, 0]);
  const xReverse = useTransform(scrollYProgress, [0, 1], [isEven ? 300 : -300, 0]);

  return (
    <ParallaxSticky key={index} height="200svh" top={stickyTop}>
      <div ref={ref} className={`${styles.featureBoxes} ${!isEven ? styles.reverse : ''}`}>
        <div className={styles.featureBoxWrapper}>
          <motion.div style={{ opacity, x }} className={styles.featureCard}>
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
                  VIEW MORE <span className={styles.arrow}>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className={styles.featureBoxWrapper}>
          <motion.div style={{ opacity, x: xReverse }} className={styles.featureCard}>
            <div className={styles.imageContent}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imageLink}
              >
                <Image src={item.imageUrl} alt={item.title} zoom={true} className={styles.image} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </ParallaxSticky>
  );
};

const Features = () => {
  const { state } = useAppRoot();
  const isMobile = useIsMobile();
  const outputs = state?.portfolio?.outputs as Output[] | undefined;

  if (!outputs) return null;

  const stickyTop = isMobile ? '100px' : '250px';

  const layerComponent = (
    <>
      {outputs.map((item, index) => (
        <FeatureItem key={index} item={item} index={index} stickyTop={stickyTop} />
      ))}
    </>
  );

  const totalHeight = `${outputs.length * 200}svh`;

  return (
    <ParallaxSticky layerComponent={layerComponent} indicator={true} height={totalHeight}>
      <div className={styles.features}>
        <div className={styles.inner}>
          <h2 className={styles.title}>OUTPUT</h2>
          <HorizontalRule />
        </div>
      </div>
    </ParallaxSticky>
  );
};

export default Features;
