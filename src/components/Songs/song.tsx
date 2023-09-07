'use client';

import Image from 'next/image';
import classNames from 'classnames';

import Typography from '@components/Typography';
import { formatDuration } from '@utils/index';
import imageLoader from '@utils/imageLoader';
import { VoiceSquare } from 'iconsax-react';

interface IProps {
  artists: string[];
  title: string;
  index: number;
  isPlaying?: boolean;
  duration: number;
  onClick: () => void;
}

const Song = ({
  artists = [],
  title,
  index,
  isPlaying = false,
  duration,
  onClick
}: IProps) => (
  <div
    className={`grid grid-flow-col bg-black/30 rounded px-6 py-2 md:py-4 cursor-pointer ${
      isPlaying ? 'text-secondary' : 'text-white'
    }`}
    onClick={onClick}
  >
    <Typography className='row-span-2 col-span-1 flex items-center'>
      {index}
    </Typography>
    <Typography className='row-span-2 col-span-4 flex items-center'>
      {title} ~ {artists.join(', ')}
    </Typography>
    <VoiceSquare
      className={classNames(
        'text-secondary ml-auto sm:ml-0 sm:my-auto sm:col-start-2',
        {
          ['invisible']: !isPlaying
        }
      )}
      variant='Broken'
      size={12}
    />
    <Typography className='ml-auto md:ml-0'>
      {formatDuration(duration, false)}
    </Typography>
  </div>
);

export default Song;
