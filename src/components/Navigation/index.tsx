'use client';
import { useState } from 'react';
import Image from 'next/image';

// Components
import Button from '@/components/Button/index';
import Item from './Item';

import { Navigation } from '@/models';
import { NAVIGATION } from '@/constants';

type Props = {};

const Navigation = ({}: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleCollapse = () => {
    setExpanded((val) => !val);
  };

  return (
    <nav className='flex flex-col gap-4 rounded-3xl p-7 sm:bg-darkAlt sm:w-20'>
      <Button
        className='sm:hidden ml-auto'
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
      <div
        className={`${
          expanded ? 'flex' : 'hidden'
        } sm:flex flex-col gap-12 sm:gap-8`}
      >
        {NAVIGATION.map(({ name, iconUrl, route }: Navigation) => (
          <Item key={name} name={name} iconUrl={iconUrl} route={route} />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
