import { memo } from 'react';
import Image from 'next/image';

// Components
import Typography from '@components/Typography';
import AlbumButtons from './AlbumButtons';

// Utils
import { generatePlaceholder } from '@utils/index';
import cloudinaryLoader from '@/utils/imageLoader';

// Constants
import { TagType } from '@constants/index';

// Types
import { CollectionId } from '@/types';

type Props = {
  albumId: number;
  myCollectionIds: CollectionId[];
  description: string;
  firstSongId: number;
  name: string;
  totalSong: number;
  totalDuration: string;
  thumbnail: string;
};

const AlbumInfo = ({
  albumId,
  myCollectionIds,
  description,
  firstSongId,
  name,
  totalDuration,
  totalSong,
  thumbnail
}: Props) => {
  return (
    <section className='flex flex-col sm:flex-row gap-6'>
      <Image
        alt={name}
        className='rounded-3xl'
        src={thumbnail}
        loader={cloudinaryLoader}
        loading='lazy'
        height={284}
        width={284}
        placeholder={`data:image/${generatePlaceholder(284, 284)}`}
      />
      <div className='grow'>
        <Typography className='text-alt font-bold' Tag={TagType.h1}>
          {name}
        </Typography>
        <Typography className='text-light pt-3'>{description}</Typography>
        <Typography className='text-light pt-3'>
          {totalSong} songs ~ {totalDuration}
        </Typography>
        <AlbumButtons
          myCollection={myCollectionIds}
          albumId={albumId}
          firstSongId={firstSongId}
        />
      </div>
    </section>
  );
};

export default memo(AlbumInfo);
