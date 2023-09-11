import { AlbumAttributes, Artist, Banner, SongAttributes } from '@models/index';

type ResponseAttributes<T, U> = {
  id: number;
  attributes: T & U;
};

type SubResponseAttributes<T> = {
  data: {
    attributes: T;
  };
};

type SubResponseAttributesArray<T> = {
  data: {
    id: number;
    attributes: T;
  }[];
};

type BannerAdditionalAttribute = {
  background: SubResponseAttributes<{ url: string }>;
};

type BannerResponse = {
  data: ResponseAttributes<Banner, BannerAdditionalAttribute>;
};

type AlbumsAdditionalAttributes = {
  thumbnail: SubResponseAttributes<{ url: string }>;
  songs: SubResponseAttributesArray<
    SongAttributes & { SubResponseAttributes: Artist }
  >;
};

type AlbumResponse = {
  data: ResponseAttributes<AlbumAttributes, AlbumsAdditionalAttributes>;
};

type AlbumsResponse = {
  data: ResponseAttributes<AlbumAttributes, AlbumsAdditionalAttributes>[];
};

type MeResponse = {
  song: SongAttributes;
  album: AlbumAttributes;
};

export type {
  AlbumResponse,
  AlbumsResponse,
  AlbumsAdditionalAttributes,
  BannerResponse,
  MeResponse,
  ResponseAttributes,
  SubResponseAttributes
};
