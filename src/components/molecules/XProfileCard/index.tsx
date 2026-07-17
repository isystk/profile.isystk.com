'use client';

import styles from './styles.module.scss';
import ScrollIn from '@/components/interactions/ScrollIn';
import Image from '@/components/atoms/Image';
import CountUp from '@/components/atoms/CountUp';
import XTimeline from '@/components/atoms/XTimeline';
import HorizontalRule from '@/components/atoms/HorizontalRule';
import useAppRoot from '@/states/useAppRoot';

/**
 * X(Twitter)のプロフィールURLからハンドル名を抽出する
 */
export const extractXHandle = (url: string): string => {
  const match = url.match(/(?:x|twitter)\.com\/([^/?]+)/i);
  return match ? match[1] : '';
};

const XProfileCard = () => {
  const { state } = useAppRoot();
  const profile = state?.portfolio?.profile;
  const contacts = state?.portfolio?.contacts;

  const twitterUrl = contacts?.find(c => c.name.toLowerCase() === 'twitter')?.linkUrl;

  if (!profile || !twitterUrl) return null;

  const handle = extractXHandle(twitterUrl);

  return (
    <section className={styles.xProfile}>
      <div className={styles.inner}>
        <h2 className={styles.title}>X (Twitter)</h2>
        <HorizontalRule variant="white" />

        <div className={styles.contents}>
          <ScrollIn className={styles.left} direction="left">
            <div className={styles.profileInner}>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileLink}
              >
                <Image
                  src={profile.imageUrl}
                  alt={profile.name}
                  zoom={true}
                  className={styles.avatar}
                />
                <p className={styles.name}>{profile.name}</p>
                <p className={styles.handle}>{`@${handle}`}</p>
              </a>
              <div className={styles.followerContainer}>
                <CountUp value={profile.twitter_follower} className={styles.followerCount} />
                <span className={styles.followerLabel}>Followers</span>
              </div>
            </div>
          </ScrollIn>

          <ScrollIn className={styles.right} direction="right" delay="0.2s">
            <div className={styles.timelineInner}>
              <XTimeline key={`${handle}-dark`} handle={handle} theme="dark" />
            </div>
          </ScrollIn>
        </div>
      </div>
    </section>
  );
};

export default XProfileCard;
