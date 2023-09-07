'use client';

import useAudio from '@hooks/useAudio';

// Components
import SongControls from './SongControls';
import VolumeControls from './VolumeControls';
import SongDetail from './SongDetail';

type Props = {};

const MusicController = ({}: Props) => {
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
    <div className='flex justify-between items-center h-full px-9 sm:px-24 sm:gap-8'>
      <SongDetail
        artists={['Hoàng Tôn', '16Typh']}
        thumbnail='https://res.cloudinary.com/drwsfgt0t/image/upload/v1692929785/ab67616d00001e0219b6ab951ea24234ed711054_46afb682e1.jpg'
        title='Hỏa'
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
    </div>
  );
};

export default MusicController;
