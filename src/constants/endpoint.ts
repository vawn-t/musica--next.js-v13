import { AlbumOrderOption } from '.';

export const BANNER = {
  getById: (id: number) => `/banners/${id}?populate=*`
};

export const ALBUM = {
  getAlbumsOrderBy: (option: AlbumOrderOption) =>
    `/albums?sort=${option}:desc&populate=*`
};

export const SONG = {
  currentSong: '/users/1?[fields][0]=player',
  getSongById: (id: number) => `/songs/${id}?populate=*`
};
