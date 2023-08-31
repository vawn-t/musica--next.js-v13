import { Navigation } from '@/models';

export enum TagType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  p = 'p',
  span = 'span'
}

export const NAVIGATION: Navigation[] = [
  {
    id: 'app/home',
    name: 'Home',
    iconUrl: '/icons/home.png',
    route: '/home'
  },
  {
    id: 'app/collection',
    name: 'My Collection',
    iconUrl: '/icons/playlist.png',
    route: '/collection'
  }
];
