import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Musica - Web Player: Unwind with Musica',
  description:
    'Musica is a digital music service that gives you access to great albums.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={quicksand.className}>
      <body>{children}</body>
    </html>
  );
}
