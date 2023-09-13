import { memo } from 'react';
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

interface IProps {
  loop: boolean;
  playing: boolean;
  toggleShuffled: () => void;
  nextSong: () => void;
  prevSong: () => void;
  togglePlaying: () => void;
  toggleLoop: () => void;
}

const Controller = ({
  loop,
  playing,
  toggleShuffled,
  nextSong,
  prevSong,
  togglePlaying,
  toggleLoop
}: IProps) => {
  return (
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
  );
};

export default memo(Controller);
