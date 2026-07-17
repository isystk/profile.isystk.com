import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
};

const Portal = ({ children }: Props) => {
  // 遅延初期化（useStateの初期化関数）でマウント時に一度だけDOM要素を生成する
  const [el] = useState<HTMLElement | null>(() =>
    typeof document !== 'undefined' ? document.createElement('div') : null,
  );

  useEffect(() => {
    if (!el) return;
    document.body.appendChild(el);
    return () => {
      el.parentNode?.removeChild(el);
    };
  }, [el]);

  if (!el) return null;

  return createPortal(children, el);
};

export default Portal;
