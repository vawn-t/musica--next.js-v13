'use client';

import { useEffect, useState } from 'react';

import { songPositionCalculate } from '@utils/index';
import useToggle from './useToggle';

type AudioHookType = [
  boolean,
  number,
  boolean,
  boolean,
  number,
  () => void,
  (value: number) => void,
  () => void,
  () => void,
  (value: number) => void
];

const useAudio = (url: string): AudioHookType => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [progressValue, setProgressValue] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [playing, togglePlaying, setPlaying] = useToggle(false);
  const [loop, toggleLoop] = useToggle(false);
  const [muted, toggleMute] = useToggle(false);

  useEffect(() => {
    const newAudio = new Audio(url);
    newAudio.addEventListener('ended', () => setPlaying(false));
    newAudio.addEventListener('timeupdate', () =>
      setProgressValue((newAudio.currentTime / newAudio.duration) * 100)
    );

    setAudio(newAudio);

    return () => {
      newAudio.removeEventListener('ended', () => setPlaying(false));
      newAudio.removeEventListener('timeupdate', () => setProgressValue(0));
    };
  }, []);

  useEffect(() => {
    playing ? audio?.play() : audio?.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  useEffect(() => {
    if (audio) {
      audio.loop = loop;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loop]);

  useEffect(() => {
    if (audio) {
      audio.muted = muted;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [muted]);

  useEffect(() => {
    if (audio) {
      audio.volume = volume;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  const seek = (value: number) => {
    if (audio) {
      audio.currentTime = songPositionCalculate(value, audio.duration);
    }
  };

  return [
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
  ];
};

export default useAudio;
