'use client';

import dynamic from 'next/dynamic';

const TonProvider = dynamic(
  () => import('./TonProviderWrapper'),
  { 
    ssr: false,
    loading: () => null
  }
);

export default function RootClientWrapper({ children }: { children: React.ReactNode }) {
  return <TonProvider>{children}</TonProvider>;
}