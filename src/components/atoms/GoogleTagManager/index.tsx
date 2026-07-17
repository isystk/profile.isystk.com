import React from 'react';
import { GoogleTagManager as NextGoogleTagManager } from '@next/third-parties/google';
import Env from '@/constants/env';

const GoogleTagManager = () => {
  const gtmId = Env.GTM_CONTAINER_ID;

  if (!gtmId) return null;

  return (
    <>
      <NextGoogleTagManager gtmId={gtmId} />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
};

export default GoogleTagManager;
