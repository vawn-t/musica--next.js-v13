import { useCallback } from 'react';
import Image from 'next/image';

import imageLoader, { generateDataURL } from '@/utils/imageLoader';
import { TagType } from '@/constants/common';

// Components
import Button from '@/components/Button/index';
import Typography from '@/components/Typography';

type Props = {
  alt: string;
  name: string;
  src: string;
};

const CollectionCard = ({ alt, src, name }: Props) => {
  const handlePlay = useCallback(() => {}, []);

  return (
    <div className='group flex w-full h-60 sm:w-56 sm:h-56 cursor-pointer relative truncate rounded-lg'>
      <Image
        className='object-cover w-full h-auto group-hover:scale-110 duration-300'
        src={src}
        alt={alt}
        loader={imageLoader}
        width={224}
        height={224}
        loading='lazy'
        placeholder={`data:image/svg+xml;base64,${generateDataURL(224, 224)}`}
      />
      <Typography
        Tag={TagType.h2}
        className='absolute bottom-8 left-4 group-hover:-translate-y-10 duration-300'
      >
        {name}
      </Typography>
      <Button
        className='absolute bottom-6 right-4 sm:hidden group-hover:block hover:scale-125 duration-300'
        onClick={handlePlay}
        icon={
          <Image
            src='/icons/Play.png'
            alt='Play button'
            width={48}
            height={48}
          />
        }
      />
    </div>
  );
};
export default CollectionCard;
