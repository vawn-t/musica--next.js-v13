import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

import { METADATA } from '@/constants';
import Navigation from '@/components/Navigation';

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: METADATA.HOME.title,
  description: METADATA.HOME.description
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={quicksand.className}>
      <body>
        <header className='m-7 sm:fixed'>
          <Navigation />
        </header>
        <main className='mx-7 sm:mx-28 sm:pt-24'>{children}</main>
      </body>
    </html>
  );
}
