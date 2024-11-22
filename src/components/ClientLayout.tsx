'use client';

import React from 'react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
        {children}
      </TonConnectUIProvider>
    </React.StrictMode>
  );
}

// Ensure proper export
export default ClientLayout;