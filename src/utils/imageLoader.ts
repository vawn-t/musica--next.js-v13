'use client';

/**
 * Generates a Cloudinary URL for the given image source, width, and quality.
 *
 * @param {object} options - The options for generating the URL.
 * @param {string} options.hash - The source of the image.
 * @param {number} options.width - The desired width of the image.
 * @param {number} [options.quality] - The desired quality of the image.
 * @return {string} The generated Cloudinary URL.
 */
function cloudinaryLoader({
  src: hash,
  width,
  quality
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  return `https://res.cloudinary.com/drwsfgt0t/image/upload/${params.join(
    ','
  )}/${hash}`;
}

export default cloudinaryLoader;
