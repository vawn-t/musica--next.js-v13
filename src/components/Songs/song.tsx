'use client';

import { useCallback } from 'react';
import useSWR from 'swr';
import classNames from 'classnames';
import { VoiceSquare } from 'iconsax-react';

// Components
import Typography from '@components/Typography';

// Utils
import { formatDuration } from '@utils/index';

// Services
import { POST, PUT, swrFetcher } from '@services/clientRequest';

interface IProps {
  id: number;
  artists: string[];
  title: string;
  index: number;
  isPlaying?: boolean;
  duration: number;
}

const Song = ({
  id,
  artists = [],
  title,
  index,
  isPlaying = false,
  duration
}: IProps) => {
  const { data } = useSWR(
    process.env.NEXT_PUBLIC_API_HOST + `/songs/${id}?populate=*`,
    swrFetcher
  );

  // TODO: must handle
  const handlePlay = useCallback(async () => {
    await PUT('/users/1', {
      player: {
        song: id,
        album: 1
      }
    });
    await POST('/api/revalidate?tag=music');
  }, [id]);

  console.log('song by id', data);

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
};

export default Song;
