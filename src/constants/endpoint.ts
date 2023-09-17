import { AlbumOrderOption, TagKey } from '.';
import queryString from '@/utils/queryString';

export const BANNER = {
  getById: (id: number) => `/banners/${id}?populate=*`
};

export const ALBUM = {
  getAlbumsOrderBy: (option: AlbumOrderOption) =>
    `/albums?sort=${option}:desc&populate=*`,
  getAlbumById: (id: number) =>
    `/albums/${id}?${queryString({
      populate: 'deep,3'
    })}`,
  albumById: (id: number) => `/albums/${id}`,
  getAllAlbumIds: `/albums?fields[0]`
};

export const ME = {
  info: '/users/1',
  getCurrentSong: `/users/1?${queryString({
    populate: {
      song: {
        populate: ['media', 'artists']
      },
      album: {
        populate: ['thumbnail', 'songs']
      }
    }
  })}`
};

export const COLLECTION = {
  getMyCollection: `/users/1?${queryString({
    populate: {
      albums: {
        populate: ['thumbnail']
      }
    }
  })}`
};

export const REVALIDATE = {
  tag: (tag: TagKey) => `/api/revalidate?tag=${tag}`
};
