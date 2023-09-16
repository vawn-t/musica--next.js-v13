import Link from 'next/link';

import Typography from '@/components/Typography';
import { TagType } from '@constants/index';

export default function NotFound() {
  return (
    <div className='h-screen w-full text-center'>
      <Typography className='font-extrabold' Tag={TagType.h2}>
        Not Found
      </Typography>
      <Typography>The album does not exist!</Typography>
      <Link className='text-secondary underline' href='/'>
        Return Home
      </Link>
    </div>
  );
}
