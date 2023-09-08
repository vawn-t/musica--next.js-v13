import { Home2, MusicPlaylist } from 'iconsax-react';
import { Navigation } from '@models/index';

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

export const goAlbum = (id: number) => `/album/${id}`;
