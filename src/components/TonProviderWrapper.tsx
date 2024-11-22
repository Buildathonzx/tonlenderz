'use client';

import React, { Suspense, lazy } from 'react';

// Lazy load the TonConnectUIProvider
const TonConnectUIProvider = lazy(() => 
  import('@tonconnect/ui-react')
    .then(module => ({ default: module.TonConnectUIProvider }))
);

const manifestUrl = '/tonconnect-manifest.json';

function LoadingFallback() {
  return <div>Loading TON Connect...</div>;
}

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error('TON Connect Error:', error);
    return <div>Failed to load TON Connect. Please refresh the page.</div>;
  }
}

export default function TonProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <TonConnectUIProvider manifestUrl={manifestUrl}>
          {children}
        </TonConnectUIProvider>
      </Suspense>
    </ErrorBoundary>
  );
}