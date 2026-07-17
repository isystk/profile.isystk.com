'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

type Props = {
  handle: string;
  height?: number;
  theme?: 'light' | 'dark';
  fallbackTimeout?: number;
};

const TWITTER_WIDGETS_SRC = 'https://platform.twitter.com/widgets.js';

// 同一ハンドルへの widgets.load() 呼び出しを1回に制限するガード。
// StrictModeの二重effect実行やFast Refreshによる再マウントのたびに
// syndication APIへ再アクセスし、アクセス制限(429)を招くのを防ぐ。
const loadedTimelineKeys = new Set<string>();

const XTimeline = ({ handle, height = 500, theme = 'light', fallbackTimeout = 5000 }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRendered, setIsRendered] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const loadKey = `${handle}-${theme}`;

    const timer = window.setTimeout(() => {
      if (!cancelled) setShowFallback(true);
    }, fallbackTimeout);

    const bindRenderedEvent = (twttr: NonNullable<Window['twttr']>) => {
      twttr.events.bind('rendered', () => {
        if (!cancelled) setIsRendered(true);
      });

      if (loadedTimelineKeys.has(loadKey)) return;
      loadedTimelineKeys.add(loadKey);
      twttr.widgets.load(containerRef.current ?? undefined);
    };

    if (window.twttr) {
      bindRenderedEvent(window.twttr);
    } else {
      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${TWITTER_WIDGETS_SRC}"]`,
      );
      const script = existing ?? document.createElement('script');
      if (!existing) {
        script.src = TWITTER_WIDGETS_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener('load', () => {
        if (window.twttr) bindRenderedEvent(window.twttr);
      });
    }

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [handle, theme, fallbackTimeout]);

  return (
    <div className={styles.timelineWrapper}>
      <div ref={containerRef} className={!isRendered && showFallback ? styles.hidden : ''}>
        <a
          className="twitter-timeline"
          data-height={height}
          data-theme={theme}
          data-chrome="noheader nofooter noborders transparent"
          href={`https://twitter.com/${handle}?ref_src=twsrc%5Etfw`}
        >
          {`Tweets by @${handle}`}
        </a>
      </div>
      {!isRendered && showFallback && (
        <a
          href={`https://twitter.com/${handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.fallbackButton}
        >
          {`X (@${handle}) で最新投稿を見る`}
        </a>
      )}
    </div>
  );
};

export default XTimeline;
