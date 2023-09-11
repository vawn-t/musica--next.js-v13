import { Song } from '.';

export class Album {
  id: number;
  attributes: AlbumAttributes;

  constructor({ id, attributes }: Album) {
    this.id = id;
    this.attributes = attributes;
  }
}

export interface AlbumAttributes {
  description: string;
  duration: number;
  name: string;
  songs: Song[];
  thumbnail: Thumbnail | string;
}

export interface Thumbnail {
  url: string;
}
