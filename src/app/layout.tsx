import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

// Components
import Navigation from '@components/Navigation';
import MusicController from '@components/MusicController';

// Constants
import { METADATA } from '@constants/index';

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
      <body className=''>
        <header className='m-7 sm:fixed'>
          <Navigation />
        </header>
        <main className='mx-7 pb-32 sm:mx-28 sm:pt-24'>{children}</main>
        <footer className='fixed w-full bottom-0 h-28 shadow-base border-t border-t-light/30 bg-dark/75 backdrop-blur-md'>
          <MusicController />
        </footer>
      </body>
    </html>
  );
}
