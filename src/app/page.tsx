'use client';
import BasicLayout from '@/components/templates/BasicLayout';
import StoreVisual from '@/components/molecules/StoreVisual';
import Price from '@/components/molecules/Price';
import News from '@/components/molecules/News';
import Features from '@/components/molecules/Features';
import Footer from '@/components/organisms/Footer';

const LandingPage = () => {
  return (
    <BasicLayout title="LP サンプル">
      <StoreVisual />
      <div className="h-48"></div>
      <Price />
      <div className="h-48"></div>
      <Features />
      <div className="h-48"></div>
      <News
        items={[
          {
            date: '2025.01.01',
            title: 'サービス開始から100万人突破！',
            text: 'リリースからわずか1ヶ月で100万人を突破！たくさんのご利用ありがとうございます。今後も使いやすさを追求してまいります。',
            imageUrl: 'https://picsum.photos/300/200',
          },
          {
            date: '2025.02.01',
            title: 'プレミアムプラン登場！',
            text: '月額・年額でチャット無制限の「プレミアムプラン」がスタート。もっとたくさん使いたい方にオススメです。',
            imageUrl: 'https://picsum.photos/300/200',
          },
          {
            date: '2025.03.01',
            title: 'ユーザー満足度92％！',
            text: 'アンケート調査にて、92％のユーザーが「満足」と回答！引き続き、より良いサービス提供に努めます。',
            imageUrl: 'https://picsum.photos/300/200',
          },
          {
            date: '2025.04.01',
            title: 'アップデート情報：音声入力に対応！',
            text: '新機能として、音声での質問受付を開始。手が離せないときでも便利に使えるようになりました！',
            imageUrl: 'https://picsum.photos/300/200',
          },
        ]}
      />
      <div className="h-48"></div>
      <Footer />
    </BasicLayout>
  );
};

export default LandingPage;
