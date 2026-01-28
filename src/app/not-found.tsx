import { Metadata } from 'next';
import ErrorPage from '@/components/organisms/ErrorPage';

export const metadata: Metadata = {
  title: '404 - ページが見つかりません',
};

export default function NotFound() {
  return <ErrorPage status={404} />;
}
