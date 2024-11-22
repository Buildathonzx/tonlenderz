import { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
