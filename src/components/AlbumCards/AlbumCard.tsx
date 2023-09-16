import Image from 'next/image';
import Link from 'next/link';

// Components
import Typography from '@components/Typography';

// Constants
import { TagType, ROUTER } from '@constants/index';

// Utils
import imageLoader from '@utils/imageLoader';
import { generatePlaceholder } from '@utils/index';

interface IProps {
  id: number;
  name: string;
  thumbnail: string;
}

const AlbumCard = ({ id, name, thumbnail }: IProps) => {
  return (
    <Link href={ROUTER.goAlbum(id)} className='w-40 cursor-pointer truncate'>
      <div className='rounded-xl overflow-hidden'>
        <Image
          src={thumbnail}
          alt='album image'
          loader={imageLoader}
          width={160}
          height={160}
          loading='lazy'
          placeholder={`data:image/${generatePlaceholder(160, 160)}`}
          style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
        />
      </div>
      <Typography Tag={TagType.h4} className='pt-1'>
        {name}
      </Typography>
    </Link>
  );
};

export default AlbumCard;
