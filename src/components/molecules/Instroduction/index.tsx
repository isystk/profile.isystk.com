'use client';

import React from 'react';
import styles from './styles.module.scss';
import ScrollIn from '@/components/interactions/ScrollIn';
import Image from '@/components/atoms/Image';
import HorizontalRule from '@/components/atoms/HorizontalRule';
import useAppRoot from '@/states/useAppRoot';
import { formatYearMonth, nl2br } from '@/utils';

const Introduction = () => {
  const { state } = useAppRoot();
  if (!state?.portfolio) {
    return null;
  }
  const { profile } = state.portfolio;

  return (
    <section className={styles.introduction} id="introduction">
      <div className={styles.inner}>
        <ScrollIn>
          <>
            <h2 className={styles.title}>自己紹介</h2>
            <HorizontalRule />
          </>
        </ScrollIn>

        <div className={styles.contents}>
          <ScrollIn className={styles.textWrapper} delay="0.2s">
            <div className={styles.description}>
              {profile?.message && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: nl2br(profile.message),
                  }}
                />
              )}
              <p className={styles.updateDate}>({formatYearMonth(profile?.updated_at)}更新)</p>
            </div>
          </ScrollIn>

          <ScrollIn className={styles.imageWrapper} delay="0.4s">
            <div className={styles.imageInner}>
              <Image src="/assets/images/profile.jpg" alt="Profile" />
            </div>
          </ScrollIn>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
