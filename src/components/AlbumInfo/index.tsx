'use client';

import Image from 'next/image';
import { MusicSquareAdd, PlayCircle } from 'iconsax-react';

// Components
import Typography from '@components/Typography';
import Button from '@components/Button';

// Utils
import imageLoader from '@/utils/imageLoader';
import { generateDataURL } from '@/utils';

// Constants
import { TagType } from '@constants/index';

type Props = {
  description: string;
  totalSong: number;
  totalDuration: number;
  thumbnail: string;
  title: string;
};

const AlbumInfo = ({
  description,
  totalSong,
  totalDuration,
  thumbnail,
  title
}: Props) => {
  // TODO: Should handle
  const handlePlayAll = () => {};
  const handleAddToCollection = () => {};

  return (
    <div className='flex flex-col sm:flex-row gap-6'>
      <Image
        alt={title}
        blurDataURL={`data:image/svg+xml;base64,${generateDataURL(284, 284)}`}
        className='rounded-3xl'
        src={thumbnail}
        loader={imageLoader}
        loading='lazy'
        height={284}
        width={284}
        placeholder='blur'
      />
      <div className='grow'>
        <Typography className='text-alt font-bold' Tag={TagType.h1}>
          {title}
        </Typography>
        <Typography className='text-light pt-3'>{description}</Typography>
        <Typography className='text-light pt-3'>
          {totalSong} songs ~ {totalDuration} hrs+
        </Typography>

        <div className='flex gap-2 pt-6 sm:pt-10'>
          <Button
            className='flex items-center gap-2 p-3 bg-black/30 rounded-2xl backdrop-blur-md'
            onClick={handlePlayAll}
          >
            <PlayCircle className='text-secondary' size={16} variant='Bold' />
            Play all
          </Button>
          <Button
            className='flex items-center gap-2 p-3 bg-black/30 rounded-2xl backdrop-blur-md'
            onClick={handleAddToCollection}
          >
            <MusicSquareAdd
              className='text-secondary'
              size={16}
              variant='Bold'
            />
            Add to my collection
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
