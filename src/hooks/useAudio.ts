'use client';

import { useCallback, useEffect, useState } from 'react';

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

/**
 * Generates a custom hook for playing audio.
 *
 * @param {string} url - The URL of the audio file.
 * @return {AudioHookType} An array containing the state and functions for controlling the audio playback.
 */
const useAudio = (url: string): AudioHookType => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [progressValue, setProgressValue] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [playing, togglePlaying, setPlaying] = useToggle(false);
  const [loop, toggleLoop] = useToggle(false);
  const [muted, toggleMute] = useToggle(false);

  useEffect(() => {
    const newAudio = new Audio(url);

    // Pauses if the playback of the audio has ended
    newAudio.addEventListener('ended', () => setPlaying(false));

    // Handles audio progress
    newAudio.addEventListener('timeupdate', () =>
      setProgressValue((newAudio.currentTime / newAudio.duration) * 100)
    );

    setAudio(newAudio);

    return () => {
      newAudio.removeEventListener('ended', () => setPlaying(false));
      newAudio.removeEventListener('timeupdate', () => setProgressValue(0));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handles toggle audio playing
  useEffect(() => {
    playing ? audio?.play() : audio?.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  // Handles toggle loop song
  useEffect(() => {
    if (audio) {
      audio.loop = loop;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loop]);

  // Handles toggle mute volume
  useEffect(() => {
    if (audio) {
      audio.muted = muted;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [muted]);

  // Handles change volume
  useEffect(() => {
    if (audio) {
      audio.volume = volume;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  /**
   * Seeks to a specific position in the audio.
   *
   * @param {number} value - The position to seek to.
   * @return {void} This function does not return anything.
   */
  const seek = useCallback(
    (value: number) => {
      if (audio) {
        audio.currentTime = songPositionCalculate(value, audio.duration);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [audio?.duration]
  );

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
