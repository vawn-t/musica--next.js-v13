import {
  AlbumAttributes,
  ArtistAttributes,
  Banner,
  Song,
  SongAttributes,
  Thumbnail
} from '@models/index';

type ResponseAttributes<T, U> = {
  id: number;
  attributes: T & U;
};

type SubResponseAttributes<T> = {
  data: {
    attributes: T;
  };
};

type BannerAdditionalAttribute = {
  background: SubResponseAttributes<{ url: string }>;
};

type BannerResponse = {
  data: ResponseAttributes<Banner, BannerAdditionalAttribute>;
};

type AlbumResponse = {
  id: number;
  attributes: AlbumAttributes & {
    songs: {
      data: {
        id: number;
        attributes: SongAttributes & {
          artists?: {
            data: {
              id: number;
              attributes: ArtistAttributes;
            }[];
          };
        };
      }[];
    };
    thumbnail: {
      data: {
        attributes: { url: string };
      };
    };
  };
};

type GetAlbumResponse = {
  data: AlbumResponse;
};

type GetAlbumsResponse = {
  data: AlbumResponse[];
};

type MeResponse = {
  song: SongAttributes;
  album: {
    id: number;
    description: string;
    duration: number;
    name: string;
    songs: Song[];
    thumbnail: Thumbnail | string;
    plays: number;
  };
};

type GetMyCollection = {
  albums: { id: number & AlbumAttributes }[];
};

export type {
  AlbumResponse,
  BannerResponse,
  MeResponse,
  ResponseAttributes,
  SubResponseAttributes,
  GetAlbumResponse,
  GetAlbumsResponse,
  GetMyCollection
};
