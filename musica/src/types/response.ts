import {
  AlbumAttributes,
  Artist,
  ArtistAttributes,
  Media,
  Song,
  SongAttributes,
  Thumbnail
} from '@models/index';

type BannerResponse = {
  data: {
    attributes: {
      description: string;
      title: string;
      url: string;
      background: {
        data: {
          attributes: {
            hash: string;
          };
        };
      };
    };
  };
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
        attributes: { hash: string };
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

type GetAllAlbumIdsResponse = {
  data: { id: number }[];
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

type CollectionId = {
  id: number;
};

type GetMyCollectionIdsResponse = {
  albums: CollectionId[];
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
  CollectionId,
  MeResponse,
  GetAlbumResponse,
  GetAlbumsResponse,
  GetMyCollectionResponse,
  GetMyCollectionIdsResponse,
  GetAlbumInfoResponse,
  GetAllAlbumIdsResponse
};
