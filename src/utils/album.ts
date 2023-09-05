import { Album } from '@models/index';
import { AlbumAdditionalAttributes, ResponseAttributes } from '@/types';

/**
 * Creates an array of albums based on the provided response attributes.
 *
 * @param {ResponseAttributes<Album, AlbumAdditionalAttributes>[]} albums - An array of response attributes representing albums.
 * @return {Album[]} An array of Album objects.
 */
export const createAlbum = (
  albums: ResponseAttributes<Album, AlbumAdditionalAttributes>[]
): Album[] => {
  let duration = 0;

  return albums.map(({ id, attributes }) => {
    attributes.songs &&
      attributes.songs.data.forEach(
        ({ attributes }) => (duration += attributes.duration)
      );
    return new Album({
      id: +id,
      duration,
      name: attributes.name,
      thumbnail: attributes.thumbnail.data.attributes.url
    });
  });
};
