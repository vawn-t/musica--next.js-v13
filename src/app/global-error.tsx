'use client';

// Components
import Typography from '@/components/Typography';

// Constants
import { METADATA, TagType } from '@constants/index';

import { quicksand } from './font';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: METADATA.ERROR
};

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <html lang='en' className={quicksand.className}>
      <body>
        <Typography Tag={TagType.h1}>Something went wrong!</Typography>
        <Typography Tag={TagType.h3}>{error.name}</Typography>
        <Typography Tag={TagType.span}>{error.message}</Typography>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
