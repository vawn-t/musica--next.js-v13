'use client';

import Button from '@components/Button';
import { MusicSquareAdd, PlayCircle } from 'iconsax-react';

// TODO: Should handle onClick event
const albumButtonProps = [
  {
    name: 'Play all',
    icon: PlayCircle,
    onClick: () => {}
  },
  {
    name: 'Add to my collection',
    icon: MusicSquareAdd,
    onClick: () => {}
  }
];

const AlbumButtons = () => {
  return (
    <div className='flex gap-2 pt-6 sm:pt-10'>
      {albumButtonProps.map(({ name, icon: Icon, onClick }) => (
        <Button
          key={name}
          className='flex items-center gap-2 p-3 bg-black/30 rounded-2xl backdrop-blur-md'
          onClick={onClick}
        >
          <Icon className='text-secondary' size={16} variant='Bold' />
          {name}
        </Button>
      ))}
    </div>
  );
};

export default AlbumButtons;
