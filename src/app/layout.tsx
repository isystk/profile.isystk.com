import '@/assets/styles/app.scss';
import { JSX } from 'react';
import { AppProvider } from '@/states/AppContext';
import AppWrapper from '@/app/AppWrapper';
import { Metadata } from 'next';
import Env from '@/constants/env';

export const metadata: Metadata = {
  title: Env.APP_NAME,
  description: Env.APP_DESCRIPTION,
  openGraph: {
    title: Env.APP_NAME,
    description: Env.APP_DESCRIPTION,
    type: 'website',
    url: Env.APP_URL,
  },
  viewport: 'width=device-width, initial-scale=1',
};

type Props = {
  children: JSX.Element;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head />
      <body>
        <AppProvider>
          <AppWrapper>{children}</AppWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
