import Image from 'next/image';

// Components
import Typography from '@components/Typography';
import AlbumButtons from './AlbumButtons';

// Utils
import imageLoader from '@/utils/imageLoader';
import { generateDataURL } from '@/utils';

// Constants
import { TagType } from '@constants/index';

type Props = {
  description: string;
  totalSong: number;
  totalDuration: string;
  thumbnail: string;
  name: string;
};

const AlbumInfo = ({
  description,
  totalDuration,
  totalSong,
  thumbnail,
  name
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
          {totalSong} songs ~ {totalDuration} hrs+
        </Typography>
        <AlbumButtons />
      </div>
    </section>
  );
};

export default AlbumInfo;
