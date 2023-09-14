import {
  AlbumAttributes,
  Artist,
  ArtistAttributes,
  Banner,
  Media,
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
  song: {
    id: number;
    artists: Artist[];
    duration: number;
    name: string;
    media?: Media;
  };
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

type GetMyCollectionResponse = {
  albums: { id: number & AlbumAttributes }[];
};

type GetAlbumInfoResponse = {
  data: {
    attributes: {
      name: string;
      description: string;
    };
  };
};

export type {
  AlbumResponse,
  BannerResponse,
  MeResponse,
  GetAlbumResponse,
  GetAlbumsResponse,
  GetMyCollectionResponse,
  GetAlbumInfoResponse
};
