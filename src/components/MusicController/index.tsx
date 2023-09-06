'use client';

import useAudio from '@hooks/useAudio';
import SongControls from './SongControls';
import VolumeControls from './VolumeControls';

const MusicController = () => {
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
  ] = useAudio(
    'https://res.cloudinary.com/drwsfgt0t/video/upload/v1693300693/spotifydown_com_Hoa_d2b0efa0db.mp3'
  );

  return (
    <div className='flex justify-around items-center h-full'>
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
    </div>
  );
};

export default MusicController;
