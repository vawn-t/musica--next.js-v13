import { MouseEvent, useCallback, useState } from 'react';
import classNames from 'classnames';
import {
  Next,
  PauseCircle,
  PlayCircle,
  Previous,
  RepeateOne,
  Shuffle
} from 'iconsax-react';

// Components
import ProgressBar from './ProgressBar';
import Button from '@components/Button';

// Constants
import { APIKey, MAX_RANGE } from '@constants/index';

// Utils
import { progressPositionCalculate } from '@utils/index';
import { updateCurrentPlayer } from '@/services/me.service';
import { mutate } from 'swr';

interface IProps {
  albumId: number;
  loop: boolean;
  playing: boolean;
  progressValue: number;
  nextSongId: number;
  previousSongId?: number;
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
  previousSongId,
  toggleLoop,
  togglePlaying,
  seek
}: IProps) => {
  // TODO: add shuffle logic
  const [isShuffled, setIsShuffled] = useState(false);

  const handleSeek = useCallback(
    (event: MouseEvent<HTMLProgressElement>) => {
      seek(
        progressPositionCalculate(
          event.clientX,
          event.currentTarget.offsetLeft,
          event.currentTarget.offsetWidth
        )
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [seek]
  );

  // TODO: Need to handles
  const toggleShuffled = () => {};
  const prevSong = () => {};

  const nextSong = async () => {
    if (albumId && nextSongId >= 0) {
      await updateCurrentPlayer({ song: nextSongId, album: albumId });

      // seek progress bar to 0
      seek(0);

      mutate(APIKey.me);
    }
  };

  return (
    <div className='flex flex-col gap-4 sm:grow'>
      <div className='flex w-full justify-center gap-6 sm:gap-10'>
        <Button className='hidden sm:block' onClick={toggleShuffled}>
          <Shuffle size='22' />
        </Button>
        <Button className='hidden sm:block' onClick={prevSong}>
          <Previous size='22' variant='Bold' />
        </Button>
        <Button className='text-secondary' onClick={togglePlaying}>
          {playing ? (
            <PauseCircle size='36' variant='Bold' />
          ) : (
            <PlayCircle size='36' variant='Bold' />
          )}
        </Button>
        <Button onClick={nextSong}>
          <Next size='22' variant='Bold' />
        </Button>
        <Button className='hidden sm:block' onClick={toggleLoop}>
          <RepeateOne
            className={classNames({ ['text-secondary']: loop })}
            size='22'
          />
        </Button>
      </div>

      <ProgressBar
        className='w-full h-1 hidden sm:block'
        maxRange={MAX_RANGE}
        onClick={handleSeek}
        value={progressValue}
      />
    </div>
  );
};

export default SongControls;
