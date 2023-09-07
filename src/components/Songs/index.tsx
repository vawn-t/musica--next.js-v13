'use client';
import { useCallback } from 'react';

import { Song as SongModel } from '@/models';
import Song from './song';

interface IProps {
  songs: SongModel[];
}

const Songs = ({ songs }: IProps) => {
  const handlePlay = useCallback(() => {}, []);

  return (
    <section className='flex flex-col gap-4'>
      {songs.map((song, index) => (
        <Song
          key={song.id}
          artists={song.artist}
          duration={song.duration}
          index={index}
          title={song.title}
          onClick={handlePlay}
          // TODO: handle isPlaying
          // isPlaying
        />
      ))}
    </section>
  );
};

export default Songs;
