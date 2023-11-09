'use client';

import { memo, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HambergerMenu } from 'iconsax-react';

// Components
import Button from '@components/Button';
import Item from './Item';

// Models
import { Navigation } from '@models/index';

// Constants
import { NAVIGATION } from '@constants/index';

// Utils
import internalLoader from '@/utils/internalLoader';

import logo from 'public/logo.png';

const Navigation = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleCollapse = useCallback(() => {
    setExpanded((val) => !val);
  }, []);

  return (
    <nav className='flex flex-col gap-8'>
      <div className='flex justify-between'>
        <Link href={NAVIGATION[0].route} className='sm:px-4'>
          <Image priority src={logo} alt='site-logo' loader={internalLoader} />
        </Link>

        <Button
          className='sm:hidden p-2'
          name='hamburger button'
          onClick={handleCollapse}
        >
          <HambergerMenu size='32' variant='Broken' />
        </Button>
      </div>

      <div
        className={`${
          expanded ? 'flex' : 'hidden'
        } sm:flex sm:items-center flex-col gap-12 sm:gap-8 sm:rounded-3xl sm:bg-darkAlt sm:w-16 sm:px-4 sm:py-8`}
      >
        {NAVIGATION.map(({ name, route, icon }: Navigation) => (
          <Item key={name} name={name} icon={icon} route={route} />
        ))}
      </div>
    </nav>
  );
};

export default memo(Navigation);
