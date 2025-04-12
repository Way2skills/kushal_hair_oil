// app/layout.tsx

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KOWSHI HERBAL HAIR OIL',
  description:
    'We source all our ingredients locally from organic farms to ensure the highest quality. Each batch is prepared with care, following time-tested methods that preserve the natural goodness of herbs.',
  verification: {
    google: '-EcOyQsbDOxHvLcSQi8f_MRZ-z_BsQNOQA4SNFEovg0',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
