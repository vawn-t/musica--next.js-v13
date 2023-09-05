export class Album {
  duration: number;
  name: string;
  id: number;
  thumbnail: string;

  constructor({ duration, name, id, thumbnail }: Album) {
    this.duration = duration;
    this.name = name;
    this.id = id;
    this.thumbnail = thumbnail;
  }
}
