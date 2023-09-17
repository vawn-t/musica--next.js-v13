import { memo, useCallback } from 'react';
import {
  Next,
  PauseCircle,
  PlayCircle,
  Previous,
  RepeateOne,
  Shuffle
} from 'iconsax-react';
import classNames from 'classnames';

// Components
import Button from '@components/Button';

// Services
import { syncRecentlyPlayedAlbum } from '@/services/album';

interface IProps {
  albumId: number;
  loop: boolean;
  playing: boolean;
  toggleShuffled: () => void;
  nextSong: () => void;
  prevSong: () => void;
  togglePlaying: () => void;
  toggleLoop: () => void;
}

const Controller = ({
  albumId,
  loop,
  playing,
  toggleShuffled,
  nextSong,
  prevSong,
  togglePlaying,
  toggleLoop
}: IProps) => {
  const handlePlay = useCallback(() => {
    togglePlaying();

    if (!playing) {
      const currentTime = new Date().toISOString();
      syncRecentlyPlayedAlbum(albumId, currentTime);
    }
  }, [albumId, playing, togglePlaying]);

  return (
    <div className='flex w-full justify-center gap-4 sm:gap-8'>
      <Button
        className='hidden sm:block'
        name='shuffle button'
        onClick={toggleShuffled}
      >
        <Shuffle size='22' />
      </Button>
      <Button
        className='hidden sm:block p-5'
        name={'previous button'}
        onClick={prevSong}
      >
        <Previous size='22' variant='Bold' />
      </Button>
      <Button
        className='text-secondary p-2'
        name={playing ? 'pause' : 'play' + ' button'}
        onClick={handlePlay}
      >
        {playing ? (
          <PauseCircle size='36' variant='Bold' />
        ) : (
          <PlayCircle size='36' variant='Bold' />
        )}
      </Button>
      <Button name='next button' className='p-5' onClick={nextSong}>
        <Next size='22' variant='Bold' />
      </Button>
      <Button
        className='hidden sm:block'
        name='loop button'
        onClick={toggleLoop}
      >
        <RepeateOne
          className={classNames({ ['text-secondary']: loop })}
          size='22'
        />
      </Button>
    </div>
  );
};

export default memo(Controller);
