'use client';
import React from 'react';
import styles from './styles.module.scss';
import { ReactNode, useEffect } from 'react';
import useAppRoot from '@/states/useAppRoot';
import { ErrorBoundary } from '@/components/interactions/ErrorBoundary';
import ScrollTopButton from '@/components/interactions/ScrollTopButton';

type Props = {
  children: ReactNode;
  title: string;
};

const BasicLayout = ({ children, title }: Readonly<Props>) => {
  const { state } = useAppRoot();

  useEffect(() => {
    document.title = title;
  }, [title]);

  if (!state) return <></>;

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <main className={styles.content}>{children}</main>
        <ScrollTopButton theme="dark" />
      </div>
    </ErrorBoundary>
  );
};

export default BasicLayout;
