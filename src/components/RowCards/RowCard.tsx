import Link from 'next/link';
import Image from 'next/image';

// Components
import Typography from '@components/Typography';
import RowCardButton from './RowCardButton';

// Constants
import { TagType, ROUTER } from '@constants/index';

// Utils
import imageLoader from '@utils/imageLoader';
import { formatDuration, generatePlaceholder } from '@utils/index';

interface IProps {
  id: number;
  duration: number;
  name: string;
  thumbnail: string;
}

const RowCard = ({ id, name, thumbnail, duration }: IProps) => {
  return (
    <Link
      href={ROUTER.goAlbum(id)}
      className='relative flex flex-col sm:flex-row justify-between sm:justify-start gap-4 sm:gap-2 min-w-[20rem] sm:w-full sm:h-24 bg-darkAlt rounded-lg p-4'
    >
      <Image
        className='rounded w-24 h-24 sm:w-16 sm:h-16'
        src={thumbnail}
        alt='album image'
        loader={imageLoader}
        width={96}
        height={96}
        loading='lazy'
        placeholder={`data:image/${generatePlaceholder(96, 96)}`}
      />
      <div className='flex flex-col justify-between gap-8 sm:gap-0'>
        <Typography Tag={TagType.h4}>{name}</Typography>
        <Typography Tag={TagType.span}>{formatDuration(duration)}</Typography>
      </div>

      <RowCardButton />
    </Link>
  );
};

export default RowCard;
