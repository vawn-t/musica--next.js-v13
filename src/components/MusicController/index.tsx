'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';

// Hooks
import useAudio from '@hooks/useAudio';

// Components
import SongControls from './SongControls';
import VolumeControls from './VolumeControls';
import SongDetail from './SongDetail';
import Spinner from '@components/Loading/Spinner';

// Services
import { getCurrentPLayer, updateCurrentPlayer } from '@/services/me.service';
import { increaseAlbumPlayCount } from '@/services/album.service';

// Constants
import { APIKey } from '@constants/index';

// Models
import { Song, Thumbnail } from '@/models/index';

interface IProps {}

const MusicController = ({}: IProps) => {
  const {
    data: { song, album } = {},
    isLoading,
    mutate
  } = useSWR(APIKey.me, getCurrentPLayer);

  const [currentAlbumId, setCurrentAlbumId] = useState<number>(-1);
  const [songsQueue, setSongsQueue] = useState<Song[]>([]);
  const [nextSongId, setNextSongId] = useState<number>(-1);
  const [previousSongId, setPreviousSonsId] = useState<number>(-1);

  const artists = useMemo(
    () => (song?.artists || []).map((artist: any) => artist.name),
    [song?.artists]
  );

  useEffect(() => {
    if (album && album?.songs.length && album.id !== currentAlbumId) {
      setCurrentAlbumId(album.id);
      setSongsQueue(album?.songs);
    }
  }, [album, currentAlbumId]);

  useEffect(() => {
    if (song) {
      setNextSongId(getNextSongId(song.id, songsQueue));
      setPreviousSonsId(getPreviousSongId(song.id, songsQueue));
    }
  }, [song, songsQueue]);

  const handleEnded = useCallback(async () => {
    if (!!album) {
      increaseAlbumPlayCount(album.id, ++album.plays);
    }

    await updateCurrentPlayer({ song: nextSongId, album: currentAlbumId });
    mutate();
  }, [album, currentAlbumId, mutate, nextSongId]);

  const getNextSongId = (currentSongId: number, songsQueue: Song[]): number => {
    if (!songsQueue.length) {
      return currentSongId;
    }

    const currentSongIndex = songsQueue.findIndex(
      (song) => song.id === currentSongId
    );

    // return to first song if last song
    return songsQueue[currentSongIndex + 1]?.id ?? songsQueue[0].id;
  };

  const getPreviousSongId = (
    currentSongId: number,
    songsQueue: Song[]
  ): number => {
    if (!songsQueue.length) {
      return currentSongId;
    }
    const currentSongIndex = songsQueue.findIndex(
      (song) => song.id === currentSongId
    );

    // return to first song if fist song
    return songsQueue[currentSongIndex - 1]?.id ?? songsQueue[0].id;
  };

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
  ] = useAudio(song?.media?.url || '', handleEnded);

  return (
    <div className='flex justify-between items-center h-full px-9 sm:px-24 sm:gap-8'>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SongDetail
            artists={artists}
            thumbnail={(album?.thumbnail as Thumbnail).url || ''}
            title={song?.name || ''}
          />
          <SongControls
            albumId={currentAlbumId}
            loop={loop}
            playing={playing}
            progressValue={progressValue}
            nextSongId={nextSongId}
            isFirstSong={song?.id === previousSongId}
            previousSongId={previousSongId}
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
