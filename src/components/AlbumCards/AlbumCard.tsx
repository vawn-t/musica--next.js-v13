import Image from 'next/image';

// Components
import Typography from '@components/Typography';

// Constants
import { TagType } from '@constants/index';

// Utils
import imageLoader from '@utils/imageLoader';
import { generateDataURL } from '@utils/index';

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
