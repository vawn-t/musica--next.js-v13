export class Album {
  duration: number;
  name: string;
  id: number;
  thumbnail: Thumbnail | string;

  constructor({ duration, name, id, thumbnail }: Album) {
    this.duration = duration;
    this.name = name;
    this.id = id;
    this.thumbnail = thumbnail;
  }
}

export interface Thumbnail {
  url: string;
}
