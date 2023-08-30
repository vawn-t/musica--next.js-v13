import Image from 'next/image';
import classNames from 'classnames';

import Typography from '@/components/Typography';
import imageLoader from '@/utils/imageLoader';

type Props = {
  title: string;
  index: number;
  isPlaying: boolean;
  duration: string;
  onClick: () => void;
};

const Song = ({
  title,
  index,
  isPlaying = false,
  duration,
  onClick
}: Props) => (
  <div
    className={classNames(
      'grid grid-cols-3 grid-rows-2 bg-black/30 text-white rounded px-6 py-4 cursor-pointer',
      {
        ['text-secondary']: isPlaying
      }
    )}
    onClick={onClick}
  >
    <Typography className='row-span-2 flex items-center'>{index}</Typography>
    <Typography className='row-span-2 flex items-center'>{title}</Typography>
    {isPlaying && (
      <Image
        className='ml-auto'
        src='/icons/playing.png'
        alt='Playing icon'
        loader={imageLoader}
        width={12}
        height={10}
      />
    )}
    <Typography className='ml-auto'>{duration}</Typography>
  </div>
);

export default Song;
