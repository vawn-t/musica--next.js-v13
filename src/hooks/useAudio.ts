import { useEffect, useState } from 'react';
import { songPositionCalculate } from '@utils/index';

import useToggle from './useToggle';

type AudioHookType = [
  boolean,
  boolean,
  number,
  () => void,
  () => void,
  (value: number) => void
];

/**
 * Returns an array with the current state of the audio player.
 *
 * @param {string} url - The URL of the audio file.
 * @return {[boolean, number, () => void, (value: number) => void]} - An array containing the following elements:
 *   - playing: A boolean indicating whether the audio is currently playing.
 *   - progressValue: A number representing the progress of the audio playback.
 *   - togglePlay: A function that toggles the playing state of the audio.
 *   - seek: A function that seeks to a specific position in the audio.
 */
const useAudio = (url: string): AudioHookType => {
  const [audio] = useState<HTMLAudioElement>(new Audio(url));
  //const [playing, setPlaying] = useState<boolean>(false);
  const [playing, togglePlaying, setPlaying] = useToggle(false);
  const [progressValue, setProgressValue] = useState<number>(0);
  const [loop, toggleLoop] = useToggle(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  useEffect(() => {
    audio.loop = loop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loop]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    audio.addEventListener('timeupdate', () =>
      setProgressValue((audio.currentTime / audio.duration) * 100)
    );

    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
      audio.removeEventListener('timeupdate', () => setProgressValue(0));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const seek = (value: number) => {
    audio.currentTime = songPositionCalculate(value, audio.duration);
  };

  return [loop, playing, progressValue, toggleLoop, togglePlaying, seek];
};

export default useAudio;
