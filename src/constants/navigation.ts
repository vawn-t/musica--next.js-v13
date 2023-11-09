import { Home2, MusicPlaylist } from 'iconsax-react';
import { Navigation } from '@models/index';

export const NAVIGATION: Navigation[] = [
  {
    id: 'app/',
    name: 'Home',
    route: '/',
    icon: Home2
  },
  {
    id: 'app/collection',
    name: 'My Collection',
    route: '/collection',
    icon: MusicPlaylist
  }
];

export const ROUTER = {
  goAlbum: (id: number) => `/album/${id}`,
  goMyCollection: '/collection'
};
