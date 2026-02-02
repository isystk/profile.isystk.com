'use client';
import React from 'react';
import styles from './styles.module.scss';
import { ReactNode } from 'react';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Loading from '@/components/atoms/Loading';
import FlashMessage from '@/components/interactions/FlashMessage';
import { ToastMessage } from '@/components/interactions/ToastMessage';
import useAppRoot from '@/states/useAppRoot';
import { ErrorBoundary } from '@/components/interactions/ErrorBoundary';
import ScrollTopButton from '@/components/interactions/ScrollTopButton';

type Props = {
  children: ReactNode;
};

const BasicLayout = ({ children }: Readonly<Props>) => {
  const { state, service } = useAppRoot();

  if (!state) return <></>;

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <video
          className={styles.bgVideo}
          src="/assets/movies/mv.webm"
          muted
          autoPlay
          loop
          playsInline
        />
        <Header isHideTop={true} />
        <main className={styles.content}>{children}</main>
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

export default BasicLayout;
