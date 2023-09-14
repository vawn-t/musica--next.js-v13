import { Fetcher } from 'swr';

// Constants
import {
  COLLECTION,
  FetchType,
  APIKey,
  ME,
  MessageType,
  TagKey,
  REVALIDATE
} from '@constants/index';

// Services
import { fetcher, PUT, swrFetcher } from './clientRequest';

// Types
import type {
  GetMyCollectionResponse,
  MeResponse,
  UpdateToCollectionRequest,
  UpdateCurrentPlayerRequest
} from '@/types';

// Models
import { Album, AlbumAttributes } from '@models/index';

export const getCurrentPLayer: Fetcher<MeResponse, APIKey> = () =>
  swrFetcher(process.env.NEXT_PUBLIC_API_HOST + ME.getCurrentSong);

export const updateCurrentPlayer = async (
  payload: UpdateCurrentPlayerRequest
) => await PUT<UpdateCurrentPlayerRequest>(ME.info, payload);

export const getMyCollection = async () => {
  const data = await fetcher<GetMyCollectionResponse>(
    COLLECTION.getMyCollection,
    FetchType.default,
    [TagKey.updateAlbum]
  );

  const albums: Album[] = data.albums.map(
    ({ id, ...rest }) => new Album({ id, attributes: rest as AlbumAttributes })
  );

  return albums;
};

export const updateAlbumToCollection = async (
  albums: UpdateToCollectionRequest
) => {
  try {
    await PUT<UpdateToCollectionRequest>(ME.info, albums);

    // force data relate to album should update-to-date
    await fetch(REVALIDATE.tag(TagKey.updateAlbum));

    return MessageType.success;
  } catch (error) {
    console.error(error);
    return MessageType.error;
  }
};
