import '@/assets/styles/app.scss';
import React, { JSX } from 'react';
import { AppProvider } from '@/states/AppContext';
import AppWrapper from '@/app/AppWrapper';
import { Metadata, Viewport } from 'next';
import Env from '@/constants/env';
import GoogleTagManager from '@/components/atoms/GoogleTagManager';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  userScalable: false,
};

export const metadata: Metadata = {
  title: Env.APP_NAME,
  description: Env.APP_DESCRIPTION,
  openGraph: {
    title: Env.APP_NAME,
    description: Env.APP_DESCRIPTION,
    type: 'website',
    url: Env.APP_URL,
  },
};

type Props = {
  children: JSX.Element;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head />
      <body>
        <GoogleTagManager />
        <AppProvider>
          <AppWrapper>{children}</AppWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
