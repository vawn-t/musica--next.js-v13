import './globals.css';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// Components
import Spinner from '@/components/Loading/Spinner';
const Navigation = dynamic(() => import('@components/Navigation'));
const MusicController = dynamic(() => import('@components/MusicController'));

// Constants
import { METADATA } from '@constants/index';

import { quicksand } from './font';

export const metadata: Metadata = {
  title: METADATA.HOME.title,
  description: METADATA.HOME.description,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true
  }
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
          <Suspense fallback={<Spinner />}>
            <Navigation />
          </Suspense>
        </header>
        <main className='mx-7 pb-36 sm:mx-28 sm:pt-24'>{children}</main>
        <footer className='fixed w-full bottom-0 h-28 shadow-base border-t border-t-light/30 bg-darkAlt/75 backdrop-blur-md'>
          <Suspense fallback={<Spinner />}>
            <MusicController />
          </Suspense>
        </footer>
      </body>
    </html>
  );
}
