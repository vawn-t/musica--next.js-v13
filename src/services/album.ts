// Constants
import { ALBUM, AlbumOrderOption, FetchType, TagKey } from '@constants/index';

// Types
import type {
  GetAlbumInfoResponse,
  GetAlbumResponse,
  GetAlbumsResponse,
  GetAllAlbumIdsResponse,
  IncreasePLaysCountRequest,
  SyncRecentlyPlayedAlbum
} from '@/types';

// Services
import { PUT, fetcher } from './clientRequest';

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

export const getAllAlbumIds = async () => {
  const { data } = await fetcher<GetAllAlbumIdsResponse>(
    ALBUM.getAllAlbumIds,
    FetchType.isr
  );

  return data;
};

export const getAlbumById = async (id: number) => {
  const { data } = await fetcher<GetAlbumResponse>(
    ALBUM.getAlbumById(id),
    FetchType.default,
    [TagKey.updateAlbum]
  );

  const album = createAlbum(data);

  return album;
};

export const increaseAlbumPlayCount = async (
  albumId: number,
  playsCount: number
) =>
  await PUT<IncreasePLaysCountRequest>(ALBUM.albumById(albumId), {
    data: { plays: playsCount }
  });

export const getAlbumInfo = async (id: number) =>
  await fetcher<GetAlbumInfoResponse>(ALBUM.albumById(id));

export const syncRecentlyPlatedAlbums = async (
  albumId: number,
  date: string
) => {
  await PUT<SyncRecentlyPlayedAlbum>(ALBUM.albumById(albumId), {
    data: {
      recentlyPlayedAt: date
    }
  });
};
