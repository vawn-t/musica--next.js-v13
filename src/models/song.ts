import { Artist } from './artist';

export class Song {
  id: number;
  attributes: SongAttributes;

  constructor(id: number, attributes: SongAttributes) {
    this.id = id;
    this.attributes = attributes;
  }
}
interface Media {
  id: number;
  url: string;
}

export interface SongAttributes {
  artists: Artist[];
  duration: number;
  name: string;
  media?: Media;
}
