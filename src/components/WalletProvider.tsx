
'use client';

import React, { Suspense } from 'react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

export default function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading wallet...</div>}>
      <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
        {children}
      </TonConnectUIProvider>
    </Suspense>
  );
}