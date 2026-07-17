import { describe, it, expect, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import '@testing-library/jest-dom';
import GoogleTagManager from './index';
import Env from '@/constants/env';

describe('GoogleTagManager', () => {
  afterEach(() => {
    Env.GTM_CONTAINER_ID = '';
  });

  it('GTMコンテナIDが未設定の場合は何も描画しないこと', () => {
    Env.GTM_CONTAINER_ID = '';
    const { container } = render(<GoogleTagManager />);
    expect(container).toBeEmptyDOMElement();
  });

  it('GTMコンテナIDが設定されている場合、SSR出力にnoscriptのiframeが含まれること', () => {
    // React はクライアントレンダリング時 <noscript> の子要素を描画しない仕様のため
    // (JS実行中のブラウザはnoscript内を解釈しないのと同じ挙動)、SSR出力で検証する
    Env.GTM_CONTAINER_ID = 'GTM-TEST123';
    const html = renderToStaticMarkup(<GoogleTagManager />);
    expect(html).toContain('<noscript>');
    expect(html).toContain('https://www.googletagmanager.com/ns.html?id=GTM-TEST123');
  });

  it('GTMコンテナIDが設定されている場合、GTMスクリプトタグが描画されること', () => {
    Env.GTM_CONTAINER_ID = 'GTM-TEST123';
    render(<GoogleTagManager />);
    // next/script は document 直下にスクリプトタグを挿入するため document から検索する
    const gtmScript = document.querySelector('script#_next-gtm');
    expect(gtmScript).toHaveAttribute(
      'src',
      expect.stringContaining('https://www.googletagmanager.com/gtm.js?id=GTM-TEST123'),
    );
  });
});
