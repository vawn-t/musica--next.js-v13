import { Fetcher } from 'swr';

import { APIKey, PLAYER } from '@/constants';
import { MeResponse } from '@/types';
import { PUT, swrFetcher } from './clientRequest';

export const getCurrentPLayer: Fetcher<MeResponse, APIKey> = () =>
  swrFetcher(process.env.NEXT_PUBLIC_API_HOST + PLAYER.currentSong);

export const updateCurrentPlayer = (songId: number, albumId: number) =>
  PUT('/users/1', {
    song: songId,
    album: albumId
  });
