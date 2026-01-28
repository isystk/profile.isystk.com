'use client';
import React, { JSX, useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { Url } from '@/constants/url';
import { User } from '@/states/auth';
import useAppRoot from '@/states/useAppRoot';

type Props = {
  user?: User;
  component: JSX.Element;
};

const AuthCheck = ({ component }: Props) => {
  const { state, service } = useAppRoot();
  const [checking, setChecking] = useState(true); // ローディング管理
  const { userId, emailVerifiedAt } = state?.auth || {};

  useEffect(() => {
    if (!service) {
      return;
    }
    if (userId) {
      setChecking(false);
      return;
    }
    const check = async () => {
      try {
        await service.auth.loginCheck();
      } catch {
        // ログインチェックで失敗した場合ログインページへ
        redirect(Url.LOGIN);
      } finally {
        setChecking(false);
      }
    };
    check();
  }, [userId, service]);

  if (checking) {
    return <p></p>;
  }

  if (!userId) {
    redirect(Url.LOGIN);
    return null;
  }

  if (!emailVerifiedAt) {
    redirect(Url.EMAIL_VERIFY);
    return null;
  }

  return <>{component}</>;
};

export default AuthCheck;
