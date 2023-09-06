import { MAX_RANGE } from '@constants/index';

const progressPositionCalculate = (clientX: number, offsetWidth: number) =>
  (clientX * MAX_RANGE) / offsetWidth;

const songPositionCalculate = (positionSeek: number, duration: number) =>
  (positionSeek / MAX_RANGE) * duration;

export { progressPositionCalculate, songPositionCalculate };
