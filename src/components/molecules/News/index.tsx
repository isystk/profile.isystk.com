'use client';

import styles from './styles.module.scss';
import React from 'react';
import ScrollIn from '@/components/interactions/ScrollIn';
import Image from '@/components/atoms/Image';
import dummyImage from '@/assets/images/dummy.png';
import HorizontalRule from '@/components/atoms/HorizontalRule';
import useAppRoot from '@/states/useAppRoot';
import { News as NewsType } from '@/states/portfolio';

const NewsSection = () => {
  const { state } = useAppRoot();
  const items = state?.portfolio?.news as NewsType[] | undefined;

  if (!items) return null;

  return (
    <section className={styles.news}>
      <div className={styles.inner}>
        <h2 className={styles.title}>お知らせ</h2>
        <HorizontalRule />

        <div className={styles.contents}>
          {items.map(({ title, text, date, imageUrl, url }, index) => (
            <ScrollIn key={index} className={styles.newsItem}>
              <>
                <div className={styles.left}>
                  <div className={styles.leftInner}>
                    <div className={styles.titleDateContainer}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.itemLink}
                      >
                        <h3 className={styles.itemTitle}>{title}</h3>
                      </a>
                      <p className={styles.itemDate}>{date}</p>
                    </div>
                    <p className={styles.text}>{text}</p>
                  </div>
                </div>
                <div className={styles.right}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.imageLink}
                  >
                    <Image
                      src={imageUrl || dummyImage.src}
                      alt={title}
                      zoom={true}
                      className={styles.image}
                    />
                  </a>
                </div>
              </>
            </ScrollIn>
          ))}
        </div>
        <div className={styles.bottomSpace} />
      </div>
    </section>
  );
};

export default NewsSection;
