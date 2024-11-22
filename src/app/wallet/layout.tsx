'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const TonConnectUIProvider = dynamic(
  () => import('@tonconnect/ui-react').then(mod => mod.TonConnectUIProvider),
  { ssr: false }
);

export default function WalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading wallet...</div>}>
      <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
        {children}
      </TonConnectUIProvider>
    </Suspense>
  );
}
