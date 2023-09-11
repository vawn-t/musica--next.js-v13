import { Album, Banner, Song } from '@/models';

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
    attributes: T;
  }[];
};

type BannerAdditionalAttribute = {
  background: SubResponseAttributes<{ url: string }>;
};

type BannerResponse = {
  data: ResponseAttributes<Banner, BannerAdditionalAttribute>;
};

type AlbumAdditionalAttributes = {
  thumbnail: SubResponseAttributes<{ url: string }>;
  songs?: SubResponseAttributesArray<{ duration: number }>;
};

type AlbumsResponse = {
  data: ResponseAttributes<Album, AlbumAdditionalAttributes>[];
};

type MeResponse = {
  song: Song;
  album: Album;
};

export type {
  AlbumsResponse,
  AlbumAdditionalAttributes,
  BannerResponse,
  ResponseAttributes,
  MeResponse
};
