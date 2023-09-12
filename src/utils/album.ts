import { Album, AlbumAttributes, Song } from '@models/index';
import { AlbumResponse } from '@/types';
import { createSong } from './song';

export const createAlbum = ({ id, attributes }: AlbumResponse): Album => {
  let duration = 0;
  let songs: Song[] = [];

  attributes.songs.data.forEach(({ id, attributes }) => {
    duration += attributes.duration;
    songs.push(
      createSong(id, { ...attributes, artists: attributes.artists.data })
    );
  });

  return new Album({
    id,
    attributes: {
      ...attributes,
      thumbnail: attributes.thumbnail.data.attributes.url,
      songs,
      duration
    }
  });
};

/**
 * Creates an array of albums based on the provided response attributes.
 *
 * @param {ResponseAttributes<AlbumAttributes, AlbumsAdditionalAttributes>[]} albums - An array of response attributes representing albums.
 * @return {Album[]} An array of Album objects.
 */
export const createAlbums = (albums: AlbumResponse[]): Album[] => {
  return albums.map((album) => createAlbum(album));
};
