import { Metadata } from 'next';
import TonProviderWrapper from '@/components/TonProviderWrapper';

export const metadata: Metadata = {
  title: 'tonlenderz',
  description: 'tonlenderz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TonProviderWrapper>
          {children}
        </TonProviderWrapper>
      </body>
    </html>
  );
}
