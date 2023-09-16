import { MouseEvent, memo, useCallback, useState } from 'react';
import { mutate } from 'swr';

// Components
import ProgressBar from './ProgressBar';
import Controller from './Controller';

// Constants
import { APIKey, MAX_RANGE } from '@constants/index';

// Utils
import { progressPositionCalculate } from '@utils/index';

// Services
import { updateCurrentPlayer } from '@/services/me';

interface IProps {
  albumId: number;
  loop: boolean;
  playing: boolean;
  progressValue: number;
  nextSongId: number;
  isFirstSong: boolean;
  previousSongId: number;
  toggleLoop: () => void;
  togglePlaying: () => void;
  seek: (value: number) => void;
}

const SongControls = ({
  albumId,
  loop,
  playing,
  progressValue,
  nextSongId,
  isFirstSong,
  previousSongId,
  toggleLoop,
  togglePlaying,
  seek
}: IProps) => {
  const handleSeek = useCallback(
    (event: MouseEvent<HTMLProgressElement>) => {
      seek(
        progressPositionCalculate(
          event.clientX,
          event.currentTarget.offsetLeft,
          event.currentTarget.offsetWidth
        )
      );
    },
    [seek]
  );

  // TODO: Need to handles
  const toggleShuffled = useCallback(() => {}, []);

  const prevSong = useCallback(async () => {
    if (isFirstSong) {
      seek(0);
    } else {
      await updateCurrentPlayer({ song: previousSongId, album: albumId });

      mutate(APIKey.me);
    }
  }, [albumId, isFirstSong, previousSongId, seek]);

  const nextSong = useCallback(async () => {
    if (albumId && nextSongId >= 0) {
      await updateCurrentPlayer({ song: nextSongId, album: albumId });

      mutate(APIKey.me);
    }
  }, [albumId, nextSongId]);
  return (
    <div className='flex flex-col gap-4 sm:grow'>
      <Controller
        loop={loop}
        playing={playing}
        toggleShuffled={toggleShuffled}
        nextSong={nextSong}
        prevSong={prevSong}
        togglePlaying={togglePlaying}
        toggleLoop={toggleLoop}
      />
      <ProgressBar
        className='w-full h-1 hidden sm:block'
        maxRange={MAX_RANGE}
        onClick={handleSeek}
        value={progressValue}
      />
    </div>
  );
};

export default memo(SongControls);
