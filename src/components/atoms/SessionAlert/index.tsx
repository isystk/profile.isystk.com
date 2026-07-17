import { useEffect, useState } from 'react';

type Props = {
  target: string;
  className?: string;
};

const SessionAlert = ({ target, className }: Props) => {
  // 初回マウント時のみ Laravel のメッセージを取り込む（読み取りは初期化関数で一度だけ行う）
  const [message] = useState<string | undefined>(() =>
    typeof window !== 'undefined' ? window.laravelSession?.[target] : undefined,
  );

  // グローバル変数の変更は副作用としてエフェクト内で行う
  useEffect(() => {
    if (message && window.laravelSession && typeof window.laravelSession === 'object') {
      window.laravelSession[target] = '';
    }
  }, [message, target]);

  if (!message) {
    return <></>;
  }

  return (
    <div className={`bg-gray-100 text-center py-4 lg:px-4 ${className}`}>
      {target === 'resent' ? 'あなたのメールアドレスに新しい認証リンクが送信されました。' : message}
    </div>
  );
};

export default SessionAlert;
