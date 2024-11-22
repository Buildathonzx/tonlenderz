'use client';

import React from 'react';
import dynamic from 'next/dynamic';

export default function TonProviderWrapper({ children }: { children: React.ReactNode }) {
  const [Provider, setProvider] = React.useState<any>(null);

  React.useEffect(() => {
    const loadProvider = async () => {
      try {
        const module = await import('@tonconnect/ui-react');
        setProvider(() => module.TonConnectUIProvider);
      } catch (error) {
        console.error('Failed to load TON Connect:', error);
      }
    };
    loadProvider();
  }, []);

  if (!Provider) {
    return <div>Loading TON Connect...</div>;
  }

  return (
    <Provider manifestUrl="/tonconnect-manifest.json">
      {children}
    </Provider>
  );
}