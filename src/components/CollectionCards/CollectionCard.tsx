'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'iconsax-react';

// Utils
import { generatePlaceholder } from '@/utils';
import imageLoader from '@utils/imageLoader';

// Constants
import { TagType, ROUTER } from '@constants/index';

// Components
import Button from '@components/Button/index';
import Typography from '@components/Typography';

interface IProps {
  id: number;
  name: string;
  thumbnail: string;
}
const CollectionCard = ({ id, thumbnail, name }: IProps) => {
  const handlePlay = useCallback(() => {}, []);

  return (
    <Link
      href={ROUTER.goAlbum(id)}
      className='group flex w-full h-60 sm:w-56 sm:h-56 cursor-pointer relative truncate rounded-lg [&:nth-child(4)]:break-after-auto'
    >
      <Image
        className='object-cover w-full h-auto group-hover:scale-110 duration-300'
        src={thumbnail}
        alt='album image'
        loader={imageLoader}
        width={224}
        height={224}
        loading='lazy'
        placeholder={`data:image/${generatePlaceholder(224, 224)}`}
      />
      <Typography
        Tag={TagType.h2}
        className='absolute bottom-8 left-4 group-hover:-translate-y-10 duration-300'
      >
        {name}
      </Typography>
      <Button
        className='absolute bottom-6 right-4 sm:hidden group-hover:block hover:scale-125 duration-300'
        name='play button'
        onClick={handlePlay}
      >
        <Play className='text-secondary' variant='Bold' size={48} />
      </Button>
    </Link>
  );
};
export default CollectionCard;
