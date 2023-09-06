'use client';

import { MouseEvent, useRef, useState } from 'react';
import {
  Next,
  PauseCircle,
  PlayCircle,
  Previous,
  RepeateOne,
  Shuffle
} from 'iconsax-react';

import Button from '@components/Button';
import useAudio from '@/hooks/useAudio';
import { MAX_RANGE } from '@constants/index';
import { progressPositionCalculate } from '@utils/index';
import classNames from 'classnames';

type Props = {};

const SongControls = ({}: Props) => {
  const [songPaused, setSongPaused] = useState(true);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const [loop, playing, progressValue, toggleLoop, togglePlaying, seek] =
    useAudio(
      'https://res.cloudinary.com/drwsfgt0t/video/upload/v1693300693/spotifydown_com_Hoa_d2b0efa0db.mp3'
    );

  const handleSeek = (event: MouseEvent<HTMLProgressElement>) => {
    seek(
      progressPositionCalculate(event.clientX, event.currentTarget.offsetWidth)
    );
  };
  const collapseShuffled = () => {};
  const collapseRepeat = () => {};
  const prevSong = () => {};
  const nextSong = () => {};

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full h-full justify-center gap-10'>
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

      <progress
        className='
          w-full cursor-pointer
          
          [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-light/25 [&::-webkit-progress-bar]:h-1

          [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-secondary
          '
        value={progressValue}
        max={MAX_RANGE}
        onClick={handleSeek}
      ></progress>
    </div>
  );
};

export default SongControls;
