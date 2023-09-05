import { ALBUM, AlbumOrderOption } from '@constants/index';
import { AlbumsResponse } from '@/types';
import { fetcher } from './clientRequest';

export const getAlbumsOrderBy = async (option: AlbumOrderOption) =>
  await fetcher<AlbumsResponse>(ALBUM.getAlbumsOrderBy(option), 'isr');
