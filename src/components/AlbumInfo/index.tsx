import Image from 'next/image';

import Typography from '@components/Typography';
import Button from '@components/Button';
import imageLoader from '@/utils/imageLoader';
import { generateDataURL } from '@/utils';
import { TagType } from '@/constants';

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

        <div>
          {/* <Button onClick={() => {}}>Play all</Button>
          <Button onClick={() => {}}>Add to my collection</Button> */}
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
