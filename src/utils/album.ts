import { Album, AlbumAttributes, Song } from '@models/index';
import { AlbumsAdditionalAttributes, ResponseAttributes } from '@/types';
import { createSong } from './song';

export const createAlbum = ({
  id,
  attributes
}: ResponseAttributes<AlbumAttributes, AlbumsAdditionalAttributes>): Album => {
  let duration = 0;
  let songs: Song[] = [];

  attributes.songs.data.forEach(({ id, attributes }) => {
    duration += attributes.duration;
    songs.push(createSong(id, attributes));
  });

  attributes.duration = duration;

  return new Album({
    id,
    attributes: {
      description: attributes.description,
      duration,
      name: attributes.name,
      songs,
      thumbnail: attributes.thumbnail.data.attributes.url
    }
  });
};

/**
 * Creates an array of albums based on the provided response attributes.
 *
 * @param {ResponseAttributes<AlbumAttributes, AlbumsAdditionalAttributes>[]} albums - An array of response attributes representing albums.
 * @return {Album[]} An array of Album objects.
 */
export const createAlbums = (
  albums: ResponseAttributes<AlbumAttributes, AlbumsAdditionalAttributes>[]
): Album[] => {
  return albums.map((album) => createAlbum(album));
};
