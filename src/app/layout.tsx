import { Metadata } from 'next';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Metadata can be exported from server component
export const metadata: Metadata = {
  title: 'tonlenderz',
  description: 'tonlenderz',
};

// Separate client component for TonConnect provider
'use client';
function Providers({ children }: { children: React.ReactNode }) {
  const manifestUrl = 'https://your-app-domain.com/tonconnect-manifest.json';
  
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      {children}
    </TonConnectUIProvider>
  );
}

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
