import Link from 'next/link';
import { headers } from 'next/headers';

import Typography from '@/components/Typography';
import { TagType } from '@constants/index';

const NotFound = () => {
  const headersList = headers();
  const domain = headersList.get('host');

  return (
    <div className='h-screen w-full text-center'>
      <Typography className='font-extrabold' Tag={TagType.h2}>
        Not Found
      </Typography>
      <Typography>
        Could not find requested resource in this site ({domain})
      </Typography>
      <Link className='text-secondary underline' href='/'>
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
