'use client';

import Link from 'next/link';

import Typography from '@/components/Typography';
import { TagType } from '@constants/index';

const Error = ({ error }: { error: Error }) => {
  return (
    <div className='h-screen w-full mx-auto text-center'>
      <Typography className='font-extrabold' Tag={TagType.h2}>
        Something went wrong at home page!
      </Typography>
      <Typography>{error.message}</Typography>
      <Link className='text-secondary underline' href='/'>
        Return Home
      </Link>
    </div>
  );
};

export default Error;
