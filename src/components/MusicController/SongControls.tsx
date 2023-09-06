import { MouseEvent, useState } from 'react';
import classNames from 'classnames';
import {
  Next,
  PauseCircle,
  PlayCircle,
  Previous,
  RepeateOne,
  Shuffle
} from 'iconsax-react';

import Button from '@components/Button';
import { MAX_RANGE } from '@constants/index';
import { progressPositionCalculate } from '@utils/index';
import ProgressBar from './ProgressBar';

type Props = {
  loop: boolean;
  playing: boolean;
  progressValue: number;
  toggleLoop: () => void;
  togglePlaying: () => void;
  seek: (value: number) => void;
};

const SongControls = ({
  loop,
  playing,
  progressValue,
  toggleLoop,
  togglePlaying,
  seek
}: Props) => {
  // TODO: add shuffle logic
  const [isShuffled, setIsShuffled] = useState(false);

  const handleSeek = (event: MouseEvent<HTMLProgressElement>) => {
    seek(
      progressPositionCalculate(
        event.clientX,
        event.currentTarget.offsetLeft,
        event.currentTarget.offsetWidth
      )
    );
  };
  const collapseShuffled = () => {};
  const prevSong = () => {};
  const nextSong = () => {};
  console.log(progressValue);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full justify-center gap-10'>
        <Button className='hidden sm:block' onClick={collapseShuffled}>
          <Shuffle size='16' />
        </Button>
        <Button onClick={prevSong}>
          <Previous size='16' variant='Bold' />
        </Button>
        <Button className='text-secondary' onClick={togglePlaying}>
          {playing ? (
            <PauseCircle size='26' variant='Bold' />
          ) : (
            <PlayCircle size='26' variant='Bold' />
          )}
        </Button>
        <Button onClick={nextSong}>
          <Next size='16' variant='Bold' />
        </Button>
        <Button onClick={toggleLoop}>
          <RepeateOne
            className={classNames({ ['text-secondary']: loop })}
            size='16'
          />
        </Button>
      </div>

      <ProgressBar
        className='w-full h-1'
        maxRange={MAX_RANGE}
        onClick={handleSeek}
        value={progressValue}
      />
    </div>
  );
};

export default SongControls;
