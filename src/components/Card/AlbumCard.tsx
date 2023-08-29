import Image from 'next/image';

import Typography from '@/components/Typography';
import { TagType } from '@/constants/common';
import imageLoader, { generateDataURL } from '@/utils/imageLoader';

type Props = {
  alt: string;
  name: string;
  src: string;
};

const AlbumCard = ({ alt, src, name }: Props) => (
  <div className='w-40 rounded-xl'>
    <div className='rounded-xl overflow-hidden'>
      <Image
        src={src}
        alt={alt}
        loader={imageLoader}
        width={160}
        height={160}
        loading='lazy'
        placeholder={`data:image/svg+xml;base64,${generateDataURL(160, 160)}`}
        style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
      />
    </div>
    <Typography Tag={TagType.h5} className='pt-1'>
      {name}
    </Typography>
  </div>
);

export default AlbumCard;
