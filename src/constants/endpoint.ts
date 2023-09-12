import { AlbumOrderOption } from '.';

export const BANNER = {
  getById: (id: number) => `/banners/${id}?populate=*`
};

export const ALBUM = {
  getAlbumsOrderBy: (option: AlbumOrderOption) =>
    `/albums?sort=${option}:desc&populate=*`,
  getAlbumById: (id: number) => `/albums/${id}?populate=deep,3`
};

export const PLAYER = {
  currentSong:
    '/users/1?populate[song][populate][0]=media&populate[song][populate][1]=artists&populate[album][populate][0]=thumbnail',
  updateCurrentPlayer: '/users/1'
};

export const COLLECTION = {
  getMyCollection: '/users/1?populate[albums][populate][0]=thumbnail'
};
