import { useEffect, useState } from 'react';
import { songPositionCalculate } from '@utils/index';

type AudioHookType = [boolean, number, () => void, (value: number) => void];

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
  const [playing, setPlaying] = useState<boolean>(false);
  const [progressValue, setProgressValue] = useState<number>(0);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    audio.addEventListener('timeupdate', () =>
      setProgressValue((audio.currentTime / audio.duration) * 100)
    );

    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
      audio.removeEventListener('timeupdate', () => setProgressValue(0));
    };
  }, []);

  const togglePlay = () => setPlaying((value) => !value);

  const seek = (value: number) => {
    audio.currentTime = songPositionCalculate(value, audio.duration);
  };

  return [playing, progressValue, togglePlay, seek];
};

export default useAudio;
