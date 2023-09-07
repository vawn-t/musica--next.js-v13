import Image from 'next/image';

import Typography from '@components/Typography';
import { TagType } from '@constants/index';
import imageLoader from '@utils/imageLoader';
import { generateDataURL } from '@/utils';

interface IProps {
  name: string;
  thumbnail: string;
}

const AlbumCard = ({ thumbnail, name }: IProps) => (
  <div className='w-40 cursor-pointer truncate'>
    <div className='rounded-xl overflow-hidden'>
      <Image
        src={thumbnail}
        alt={name}
        loader={imageLoader}
        width={160}
        height={160}
        loading='lazy'
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${generateDataURL(160, 160)}`}
        style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
      />
    </div>
    <Typography Tag={TagType.h5} className='pt-1'>
      {name}
    </Typography>
  </div>
);

export default AlbumCard;
