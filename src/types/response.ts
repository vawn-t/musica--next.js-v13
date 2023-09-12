import {
  AlbumAttributes,
  Artist,
  ArtistAttributes,
  Banner,
  SongAttributes
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
  songs: SubResponseAttributesArray<SongAttributes & { artists: Artist }>;
};

type AlbumResponse = {
  id: number;
  attributes: AlbumAttributes & {
    songs: {
      data: {
        id: number;
        attributes: SongAttributes & {
          artists: {
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
  SubResponseAttributes,
  GetAlbumResponse,
  GetAlbumsResponse
};
