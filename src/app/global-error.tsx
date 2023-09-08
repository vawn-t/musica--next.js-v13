'use client';

// Components
import Typography from '@/components/Typography';

// Constants
import { TagType } from '@/constants';

import { quicksand } from './font';

export default function GlobalError({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
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
}
