import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Portal from '@/components/interactions/Portal';

export const MessageTypes = {
  Success: 'success',
  Error: 'error',
} as const;

type Props = {
  type?: (typeof MessageTypes)[keyof typeof MessageTypes];
  message?: string | null;
};

const FlashMessage = ({ type = MessageTypes.Success, ...props }: Props) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  // 初回マウント時のみ props.message または Laravel のフラッシュメッセージを取り込む（読み取りは初期化関数で一度だけ行う）
  const [message] = useState(() => props.message ?? window.laravelSession?.status);
  const [consumedFromLaravelSession] = useState(
    () => !props.message && !!window.laravelSession?.status,
  );

  // グローバル変数の変更は副作用としてエフェクト内で行う
  useEffect(() => {
    if (
      consumedFromLaravelSession &&
      window.laravelSession &&
      typeof window.laravelSession === 'object'
    ) {
      delete window.laravelSession['status'];
    }
  }, [consumedFromLaravelSession]);

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  if (!message) {
    return <></>;
  }

  const handleAnimationEnd = () => {
    if (fadeOut) {
      setHidden(true);
    }
  };

  return (
    <Portal>
      <div
        className={`
          ${styles.flashMessage}
          ${fadeOut ? styles.fadeOut : ''}
          ${hidden ? styles.hidden : ''}
          ${type === MessageTypes.Error ? styles.error : ''}
        `}
        onAnimationEnd={handleAnimationEnd}
      >
        {message}
      </div>
    </Portal>
  );
};

export default FlashMessage;
