'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

// Hooks
import useAudio from '@hooks/useAudio';

// Components
import SongControls from './SongControls';
import VolumeControls from './VolumeControls';
import SongDetail from './SongDetail';

// Services
import { swrFetcher } from '@/services/clientRequest';

// Constants
import { SONG } from '@/constants';

interface IProps {}

const MusicController = ({}: IProps) => {
  const {
    data: {
      player: { song = '' }
    },
    isLoading: idGetting
  } = useSWR(process.env.NEXT_PUBLIC_API_HOST + SONG.currentSong, swrFetcher);

  const { data, isLoading, mutate } = useSWR(
    process.env.NEXT_PUBLIC_API_HOST + SONG.getSongById(song),
    swrFetcher
  );

  useEffect(() => {
    mutate();
  }, [idGetting, mutate]);

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
    isLoading ? '' : data.data?.attributes?.media?.data?.attributes?.url
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
