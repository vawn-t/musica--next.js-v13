export class Artist {
  id: number;
  attributes: ArtistAttributes;

  constructor(id: number, attributes: ArtistAttributes) {
    this.id = id;
    this.attributes = attributes;
  }
}

export interface ArtistAttributes {
  name: string;
}
