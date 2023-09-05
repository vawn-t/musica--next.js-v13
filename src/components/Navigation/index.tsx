'use client';
import { memo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import Button from '@components/Button/index';
import Item from './Item';

import { Navigation } from '@/models';
import { NAVIGATION } from '@constants/index';

type Props = {};

const Navigation = ({}: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleCollapse = () => {
    setExpanded((val) => !val);
  };

  return (
    <nav className='flex flex-col gap-8'>
      <div className='flex justify-between'>
        <Link href={NAVIGATION[0].route} className='sm:px-4'>
          <Image
            priority
            src='/logo.png'
            alt='site-logo'
            width={34}
            height={34}
          />
        </Link>

        <Button
          className='sm:hidden'
          icon={
            <Image
              src='/icons/menu.png'
              alt='Menu button'
              width={24}
              height={24}
            />
          }
          onClick={handleCollapse}
        />
      </div>

      <div
        className={`${
          expanded ? 'flex' : 'hidden'
        } sm:flex sm:items-center flex-col gap-12 sm:gap-8 sm:rounded-3xl sm:bg-darkAlt sm:w-16 sm:px-4 sm:py-8`}
      >
        {NAVIGATION.map(({ name, iconUrl, route }: Navigation) => (
          <Item key={name} name={name} iconUrl={iconUrl} route={route} />
        ))}
      </div>
    </nav>
  );
};

export default memo(Navigation);
