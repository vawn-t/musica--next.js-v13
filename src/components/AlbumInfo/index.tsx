import { memo } from 'react';
import Image from 'next/image';

// Components
import Typography from '@components/Typography';
import AlbumButtons from './AlbumButtons';

// Utils
import imageLoader from '@/utils/imageLoader';
import { generateDataURL } from '@utils/index';

// Constants
import { TagType } from '@constants/index';

// Models
import { Album } from '@models/index';

type Props = {
  albumId: number;
  myCollection: Album[];
  description: string;
  firstSongId: number;
  name: string;
  totalSong: number;
  totalDuration: string;
  thumbnail: string;
};

const AlbumInfo = ({
  albumId,
  myCollection,
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
        loader={imageLoader}
        loading='lazy'
        height={284}
        width={284}
        placeholder={`data:image/svg+xml;base64,${generateDataURL(284, 284)}`}
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
          myCollection={myCollection}
          albumId={albumId}
          firstSongId={firstSongId}
        />
      </div>
    </section>
  );
};

export default memo(AlbumInfo);
