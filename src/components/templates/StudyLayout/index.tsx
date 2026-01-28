'use client';
import React from 'react';
import styles from './styles.module.scss';
import { ReactNode, useEffect } from 'react';
import useAppRoot from '@/states/useAppRoot';
import { ErrorBoundary } from '@/components/interactions/ErrorBoundary';
import ScrollTopButton from '@/components/interactions/ScrollTopButton';
import SideMenu from '@/components/molecules/SideMenu';
import Footer from '@/components/organisms/Footer';

type Props = {
  children: ReactNode;
  title: string;
};

const StudyLayout = ({ children, title }: Readonly<Props>) => {
  const { state } = useAppRoot();

  useEffect(() => {
    document.title = title;
  }, [title]);

  if (!state) return <></>;

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <main className={styles.content}>
          <p className="font-bold text-3xl p-5 bg-blue-100">{title}</p>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-1">
              <SideMenu selector="#contents" />
            </div>
            <div id="contents" className="md:col-span-4 md:p-5">
              {children}
            </div>
          </div>

          <div className="h-48"></div>
          <Footer />
        </main>
        <ScrollTopButton theme="dark" />
      </div>
    </ErrorBoundary>
  );
};

export default StudyLayout;
