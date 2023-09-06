import { Home2, MusicPlaylist } from 'iconsax-react';
import { Navigation } from '@/models';

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

/** CONSTANTS **/

export const NAVIGATION: Navigation[] = [
  {
    id: 'app/home',
    name: 'Home',
    route: '/home',
    icon: Home2
  },
  {
    id: 'app/collection',
    name: 'My Collection',
    route: '/collection',
    icon: MusicPlaylist
  }
];
