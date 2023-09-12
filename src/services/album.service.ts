// Constants
import { ALBUM, AlbumOrderOption, FetchType } from '@constants/index';

// Types
import type { GetAlbumResponse, GetAlbumsResponse } from '@/types';

// Services
import { fetcher } from './clientRequest';

// Utils
import { createAlbum, createAlbums } from '@utils/index';

// Models
import { Album } from '@models/index';

export const getAlbumsOrderBy = async (option: AlbumOrderOption) => {
  const { data } = await fetcher<GetAlbumsResponse>(
    ALBUM.getAlbumsOrderBy(option),
    FetchType.isr
  );

  const albums: Album[] = createAlbums(data);

  return albums;
};

export const getAlbumById = async (id: number) => {
  const { data } = await fetcher<GetAlbumResponse>(
    ALBUM.getAlbumById(id),
    FetchType.ssr
  );

  const { attributes: albumAttributes } = createAlbum(data);

  return albumAttributes;
};
