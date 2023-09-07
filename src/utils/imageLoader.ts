'use client';

/**
 * Generates a URL for an image with the specified source, width, and quality.
 *
 * @param {string} src - The source of the image.
 * @param {number} width - The desired width of the image.
 * @param {number} [quality] - The desired quality of the image (default is 75).
 * @returns {string} - The URL for the image.
 */
const imageLoader = ({
  src,
  width,
  quality
}: {
  src: string;
  width: number;
  quality?: number;
}) => `${src}?w=${width}&q=${quality || 75}`;

export default imageLoader;
