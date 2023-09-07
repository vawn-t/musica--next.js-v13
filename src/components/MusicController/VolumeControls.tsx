import { MouseEvent } from 'react';
import { VolumeHigh, VolumeMute } from 'iconsax-react';

import ProgressBar from './ProgressBar';
import { MAX_RANGE } from '@constants/index';
import { progressPositionCalculate } from '@utils/index';

type Props = {
  muted: boolean;
  volume: number;
  onSetVolume: (value: number) => void;
  onToggleMute: () => void;
};

const VolumeControls = ({
  muted,
  volume,
  onSetVolume,
  onToggleMute
}: Props) => {
  const handleVolumeControls = (event: MouseEvent<HTMLProgressElement>) => {
    onSetVolume(
      progressPositionCalculate(
        event.clientX,
        event.currentTarget.offsetLeft,
        event.currentTarget.offsetWidth
        // divide by 100 due to volume receive value from 0 to 1
      ) / 100
    );
  };

  return (
    <div className='hidden sm:flex items-center gap-2'>
      {muted || volume === 0 ? (
        <VolumeMute
          className='cursor-pointer'
          size='18'
          variant='Bold'
          onClick={onToggleMute}
        />
      ) : (
        <VolumeHigh
          className='cursor-pointer'
          size='18'
          variant='Bold'
          onClick={onToggleMute}
        />
      )}
      <ProgressBar
        className='h-1 w-40'
        maxRange={MAX_RANGE}
        onClick={handleVolumeControls}
        value={volume * 100}
      />
    </div>
  );
};

export default VolumeControls;
