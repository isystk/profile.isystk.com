'use client';

import React, { useRef } from 'react';
import styles from './styles.module.scss';
import { useInView } from '@/hooks/useInView';
import ScrollIn from '@/components/interactions/ScrollIn';
import HorizontalRule from '@/components/atoms/HorizontalRule';
import useAppRoot from '@/states/useAppRoot';
import { SkillCategory } from '@/states/portfolio';

const SkillCard = ({ category }: { category: SkillCategory; key?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isInView ? styles.visible : ''}`}
      style={{ '--accent-color': category.color } as React.CSSProperties}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.categoryTitle}>{category.title}</h3>
        <div className={styles.ratingBadge}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < category.rating ? styles.starFull : styles.starEmpty}>
              ●
            </span>
          ))}
        </div>
      </div>

      <p className={styles.categoryDescription}>{category.text}</p>

      <div>
        {category.items.map((item, idx) => (
          <div key={idx} className={styles.itemRow}>
            <div className={styles.itemMain}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemRating}>Lv.{item.rating}</span>
            </div>
            <p className={styles.itemText}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillSection = () => {
  const { state } = useAppRoot();
  const skills = state?.portfolio?.skills as SkillCategory[] | undefined;

  if (!skills) return null;

  return (
    <section className={styles.container}>
      <ScrollIn>
        <>
          <h2 className={styles.sectionTitle}>SKILLS</h2>
          <HorizontalRule />
        </>
      </ScrollIn>

      <div className={styles.skillGrid}>
        {skills.map((category, index) => (
          <SkillCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
