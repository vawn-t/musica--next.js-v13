import { AlbumOrderOption } from '.';

export const BANNER = {
  getById: (id: number) => `/banners/${id}?populate=*`
};

export const ALBUM = {
  getAlbumsOrderBy: (option: AlbumOrderOption) =>
    `/albums?sort=${option}:desc&populate=*`
};
