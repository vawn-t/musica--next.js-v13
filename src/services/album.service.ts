// Constants
import { ALBUM, AlbumOrderOption, FetchType } from '@constants/index';

// Types
import type { AlbumResponse, AlbumsResponse } from '@/types';

import { fetcher } from './clientRequest';

export const getAlbumsOrderBy = async (option: AlbumOrderOption) =>
  await fetcher<AlbumsResponse>(ALBUM.getAlbumsOrderBy(option), FetchType.isr);

export const getAlbumById = async (id: number) =>
  await fetcher<AlbumResponse>(ALBUM.getAlbumById(id));
