'use client';

/**
 * Generates a URL with query parameters for an internal image source.
 *
 * @param {string} src - The source URL of the image.
 * @param {number} width - The desired width of the image.
 * @param {number} [quality] - The desired quality of the image (default is 75).
 * @return {string} - The generated URL with query parameters.
 */
const internalLoader = ({
  src,
  width,
  quality
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default internalLoader;
