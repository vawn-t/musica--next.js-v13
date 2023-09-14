import { Artist, Song, SongAttributes } from '@models/index';

export const createSong = (id: number, attributes: SongAttributes) => {
  return new Song(id, {
    artists: attributes.artists,
    duration: attributes.duration,
    name: attributes.name
  });
};
