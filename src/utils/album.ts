// Utils
import { createSong } from './song';

// Models
import { Album, Song } from '@models/index';

// Types
import { AlbumResponse } from '@/types';

/**
 * Creates an album object based on the provided album response.
 *
 * @param {AlbumResponse} albumResponse - The album response object containing the album data.
 * @return {Album} The created album object.
 */
export const createAlbum = ({
  id,
  attributes: { songs, ...restAttributes }
}: AlbumResponse): Album => {
  const albumDuration = songs.data.reduce(
    (acc, { attributes: { duration } }) => acc + duration,
    0
  );

  const createdSongs = songs.data.map(({ id, attributes }) =>
    createSong(id, {
      ...attributes,
      artists: attributes.artists ? attributes.artists.data : []
    })
  );

  return new Album({
    id,
    attributes: {
      ...restAttributes,
      thumbnail: restAttributes.thumbnail.data.attributes.url,
      songs: createdSongs,
      duration: albumDuration
    }
  });
};

/**
 * Creates an array of albums based on the given album responses.
 *
 * @param {AlbumResponse[]} albums - The array of album responses.
 * @return {Album[]} The array of created albums.
 */
export const createAlbums = (albums: AlbumResponse[]): Album[] => {
  return albums.map((album) => createAlbum(album));
};

/**
 * Checks if an album with the given ID exists in the collection.
 *
 * @param {Album[]} collection - The collection of albums.
 * @param {number} currentAlbumId - The ID of the current album.
 * @return {{albumExists: boolean, currentAlbums: {id: number}[]}} - An object indicating if the album exists and the current albums in the collection.
 */
export const isAddedAlbum = (collection: Album[], currentAlbumId: number) => {
  const currentAlbums = collection.map((album) => ({ id: album.id }));

  const albumExists = currentAlbums.some(
    (album) => album.id === currentAlbumId
  );

  return { albumExists, currentAlbums };
};
