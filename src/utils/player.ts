import { MAX_RANGE } from '@constants/index';

/**
 * Calculates the position of the progress
 *
 * @param {number} clientX - The x-coordinate of the mouse position.
 * @param {number} offsetLeft - The offsetLeft of the element.
 * @param {number} offsetWidth - The offsetWidth of the element.
 * @return {number} The calculated position of the progress.
 */
const progressPositionCalculate = (
  clientX: number,
  offsetLeft: number,
  offsetWidth: number
) => ((clientX - offsetLeft) * MAX_RANGE) / offsetWidth;

const songPositionCalculate = (positionSeek: number, duration: number) =>
  (positionSeek / MAX_RANGE) * duration;

export { progressPositionCalculate, songPositionCalculate };
