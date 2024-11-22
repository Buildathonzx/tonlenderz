
'use client';

import { TonConnectUIProvider } from '@tonconnect/ui-react';

const manifestUrl = 'https://your-app-domain.com/tonconnect-manifest.json';

export default function TonProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      {children}
    </TonConnectUIProvider>
  );
}