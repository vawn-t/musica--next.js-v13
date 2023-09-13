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
  AddToCollectionRequest,
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
    FetchType.isr
  );

  const albums: Album[] = data.albums.map(
    ({ id, ...rest }) => new Album({ id, attributes: rest as AlbumAttributes })
  );

  return albums;
};

export const addAlbumToCollection = async (albumId: number) => {
  try {
    const albums = await getMyCollection();
    const currentAlbums = albums.map((album) => ({ id: album.id }));
    let updatedAlbums = [];

    const albumExists = currentAlbums.find((album) => album.id === albumId);

    if (albumExists) {
      return MessageType.existed;
    } else {
      updatedAlbums = [...currentAlbums, { id: albumId }];
      // continue with the rest of your code
    }

    await PUT<AddToCollectionRequest>(ME.info, {
      albums: updatedAlbums
    });

    return MessageType.success;
  } catch (error) {
    console.error(error);

    return MessageType.error;
  }
};
