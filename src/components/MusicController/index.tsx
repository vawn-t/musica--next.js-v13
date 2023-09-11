'use client';

import useSWR from 'swr';

// Hooks
import useAudio from '@hooks/useAudio';

// Components
import SongControls from './SongControls';
import VolumeControls from './VolumeControls';
import SongDetail from './SongDetail';
import Spinner from '@components/Loading/Spinner';

// Services
import { getCurrentPLayer } from '@/services/player.service';

// Constants
import { APIKey } from '@constants/index';

// Models
import { Thumbnail } from '@models/album';

interface IProps {}

const MusicController = ({}: IProps) => {
  const { data: { song, album } = {}, isLoading } = useSWR(
    APIKey.me,
    getCurrentPLayer
  );

  const [
    muted,
    volume,
    loop,
    playing,
    progressValue,
    toggleMute,
    setVolume,
    toggleLoop,
    togglePlaying,
    seek
  ] = useAudio(song?.media?.url || '');

  return (
    <div className='flex justify-between items-center h-full px-9 sm:px-24 sm:gap-8'>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SongDetail
            artists={(song?.artists || []).map((artist: any) => artist.name)}
            thumbnail={(album?.thumbnail as Thumbnail).url || ''}
            title={song?.name || ''}
          />
          <SongControls
            loop={loop}
            playing={playing}
            progressValue={progressValue}
            toggleLoop={toggleLoop}
            togglePlaying={togglePlaying}
            seek={seek}
          />
          <VolumeControls
            muted={muted}
            volume={volume}
            onSetVolume={setVolume}
            onToggleMute={toggleMute}
          />
        </>
      )}
    </div>
  );
};

export default MusicController;
