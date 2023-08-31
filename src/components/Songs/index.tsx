import { useCallback } from 'react';

import { Song as SongModel } from '@/models';
import Song from './song';

type Props = {
  songs: SongModel[];
};

const Songs = ({ songs }: Props) => {
  const handlePlay = useCallback(() => {}, []);

  return (
    <div className='flex flex-col gap-4'>
      {songs.map((song, index) => (
        <Song
          key={song.id}
          duration={song.duration}
          index={index}
          title={song.title}
          onClick={handlePlay}
          // TODO: handle isPlaying
          // isPlaying
        />
      ))}
    </div>
  );
};

export default Songs;
