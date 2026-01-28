'use client';
import React from 'react';
import styles from './styles.module.scss';
import { ReactNode, useEffect } from 'react';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Circles from '@/components/interactions/Circles';
import Loading from '@/components/atoms/Loading';
import FlashMessage from '@/components/interactions/FlashMessage';
import { ToastMessage } from '@/components/interactions/ToastMessage';
import useAppRoot from '@/states/useAppRoot';
import { ErrorBoundary } from '@/components/interactions/ErrorBoundary';
import ScrollTopButton from '@/components/interactions/ScrollTopButton';

type Props = {
  children: ReactNode;
  title: string;
};

const LaraECLayout = ({ children, title }: Readonly<Props>) => {
  const { state, service } = useAppRoot();

  useEffect(() => {
    document.title = title;
  }, [title]);

  if (!state) return <></>;

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <Header />
        <Circles>
          <main className={styles.content}>{children}</main>
        </Circles>
        <Footer />
        <FlashMessage />
        <ToastMessage
          isOpen={!!state.toastMessage}
          message={state.toastMessage || ''}
          onConfirm={() => {
            service?.hideToastMessage();
          }}
          onCancel={() => {
            service?.hideToastMessage();
          }}
        />
        <ScrollTopButton />
        <Loading />
      </div>
    </ErrorBoundary>
  );
};

export default LaraECLayout;
