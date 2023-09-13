import { Fetcher } from 'swr';

// Constants
import {
  COLLECTION,
  FetchType,
  APIKey,
  ME,
  MessageType
} from '@constants/index';

// Services
import { fetcher, PUT, swrFetcher } from './clientRequest';

// Types
import type {
  GetMyCollection,
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
  const data = await fetcher<GetMyCollection>(
    COLLECTION.getMyCollection,
    FetchType.isr // TODO: should update to isrTag
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

    return MessageType.success;
  } catch (error) {
    console.error(error);
    return MessageType.error;
  }
};
