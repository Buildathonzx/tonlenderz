
'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const TonProvider = dynamic(
  () => import('./TonProviderWrapper'),
  { ssr: false }
);

export default function RootClientWrapper({ children }: { children: React.ReactNode }) {
  return <TonProvider>{children}</TonProvider>;
}