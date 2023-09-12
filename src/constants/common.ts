import { Home2, MusicPlaylist } from 'iconsax-react';
import { Navigation } from '@models/index';

/** ENUMS **/

export enum TagType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  p = 'p',
  span = 'span'
}

export enum AlbumOrderOption {
  recentlyPlayed = 'recentlyPlayedAt',
  popularity = 'plays',
  release = 'publishedAt'
}

export enum FetchType {
  ssr,
  isr,
  isrTag
}

export enum MessageType {
  error = 'error',
  success = 'success'
}

/** CONSTANTS **/

export const MAX_RANGE = 100;
