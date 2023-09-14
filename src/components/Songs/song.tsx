'use client';

import { mutate } from 'swr';
import classNames from 'classnames';
import { VoiceSquare } from 'iconsax-react';

// Components
import Typography from '@components/Typography';

// Utils
import { formatDuration } from '@utils/index';

// Services
import { updateCurrentPlayer } from '@/services/me.service';

// Constants
import { APIKey } from '@constants/index';

// Artist
import { Artist } from '@models/index';

interface IProps {
  id: number;
  albumId: number;
  artists: Artist[];
  name: string;
  index: number;
  isPlaying?: boolean;
  duration: number;
}

const Song = ({
  id,
  albumId,
  artists = [],
  name,
  index,
  isPlaying = false,
  duration
}: IProps) => {
  const handlePlay = async () => {
    await updateCurrentPlayer({ song: id, album: albumId });

    mutate(APIKey.me);
  };

  return (
    <div
      className={`grid grid-flow-col grid-cols-7 bg-black/30 rounded px-6 py-2 md:py-4 cursor-pointer ${
        isPlaying ? 'text-secondary' : 'text-white'
      }`}
      onClick={handlePlay}
    >
      <Typography className='row-span-2 col-span-1 flex items-center'>
        {index}
      </Typography>
      <Typography className='row-span-2 col-span-4 flex items-center'>
        {name} ~{' '}
        {artists.map((artist: Artist) => artist.attributes.name).join(', ')}
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
};

export default Song;
