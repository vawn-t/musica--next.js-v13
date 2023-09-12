// Constants
import { ALBUM, AlbumOrderOption, FetchType } from '@constants/index';

// Types
import type { GetAlbumResponse, GetAlbumsResponse } from '@/types';

import { fetcher } from './clientRequest';

export const getAlbumsOrderBy = async (option: AlbumOrderOption) =>
  await fetcher<GetAlbumsResponse>(
    ALBUM.getAlbumsOrderBy(option),
    FetchType.isr
  );

export const getAlbumById = async (id: number) =>
  await fetcher<GetAlbumResponse>(ALBUM.getAlbumById(id));
