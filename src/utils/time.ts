/**
 * Formats a duration in seconds into a string representation.
 *
 * @param {number} seconds - The duration in seconds to format.
 * @param {boolean} includeHours - Whether to include hours in the formatted duration.
 * @return {string} The formatted duration string.
 */
export const formatDuration = (
  seconds: number,
  includeHours: boolean
): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = includeHours
    ? Math.floor((seconds % 3600) / 60)
    : Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsString =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  if (includeHours) {
    return `${hoursString}:${minutesString}:${secondsString}`;
  }
  return `${minutesString}:${secondsString}`;
};
