import { useCallback } from 'react';
import Image from 'next/image';

// Components
import Typography from '@/components/Typography';
import Button from '@/components/Button/index';

// Constant
import { TagType } from '@/constants';

// Utils
import { formatDuration, generateDataURL } from '@/utils';
import imageLoader from '@/utils/imageLoader';

type Props = {
  name: string;
  thumbnail: string;
  duration: number;
};

const RowCard = ({ name, thumbnail, duration }: Props) => {
  const handlePlay = useCallback(() => {}, []);

  return (
    <div className='relative flex flex-col sm:flex-row justify-between sm:justify-start gap-4 sm:gap-2 w-80 sm:w-96 sm:h-24 bg-darkAlt rounded-lg p-4'>
      <Image
        className='rounded'
        src={thumbnail}
        alt={name}
        loader={imageLoader}
        width={63}
        height={63}
        loading='lazy'
        placeholder={`data:image/svg+xml;base64,${generateDataURL(63, 63)}`}
      />
      <div className='flex flex-col justify-between gap-8 sm:gap-0'>
        <Typography Tag={TagType.h4}>{name}</Typography>
        <Typography Tag={TagType.span}>{formatDuration(duration)}</Typography>
      </div>
      <Button
        className='absolute w-9 h-9 flex justify-center items-center rounded-full border-2 border-light right-4'
        onClick={handlePlay}
        icon={
          <Image
            className=''
            src='/icons/Fill-4.png'
            alt='Play button'
            width={16}
            height={16}
          />
        }
      />
    </div>
  );
};

export default RowCard;
