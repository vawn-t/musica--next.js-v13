import Link from 'next/link';

import Typography from '@/components/Typography';
import { TagType } from '@constants/index';

export default function NotFound() {
  return (
    <div className='h-screen w-full text-center'>
      <Typography className='font-extrabold' Tag={TagType.h2}>
        Not Found
      </Typography>
      <Typography>Could not find requested resource</Typography>
      <Link className='text-secondary underline' href='/'>
        Return Home
      </Link>
    </div>
  );
}
