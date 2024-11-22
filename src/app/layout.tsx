import { Metadata } from 'next';
import RootClientWrapper from '@/components/RootClientWrapper';

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
        <RootClientWrapper>
          {children}
        </RootClientWrapper>
      </body>
    </html>
  );
}
