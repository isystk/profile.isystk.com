'use client';

import { JSX, useEffect, useState } from 'react';
import useAppRoot from '@/states/useAppRoot';

type Props = {
  children: JSX.Element;
};

export default function AppWrapper({ children }: Props) {
  const { service } = useAppRoot();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!service) {
      return;
    }
    const check = async () => {
      // ポートフォリオデータを読み込む
      await service.portfolio.read();
      setChecking(false);
    };
    check();
  }, [service]);

  if (checking) {
    return <></>;
  }

  return <>{children}</>;
}
