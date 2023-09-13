'use client';

import { useRouter, usePathname } from 'next/navigation';
import { MusicSquareAdd, PlayCircle } from 'iconsax-react';

// Components
import Button from '@components/Button';

// Models
import { addAlbumToCollection } from '@/services/me.service';

// TODO: Should handle onClick event
const albumButtonProps = [
  {
    name: 'Play all',
    icon: PlayCircle,
    handleClick: () => {}
  },
  {
    name: 'Add to my collection',
    icon: MusicSquareAdd,
    handleClick: () => {}
  }
];

interface IProp {
  albumId: number;
}

const AlbumButtons = ({ albumId }: IProp) => {
  const currentPath = usePathname();
  const { push } = useRouter();

  return (
    <div className='flex gap-2 pt-6 sm:pt-10'>
      {albumButtonProps.map(({ name, icon: Icon, handleClick = () => {} }) => {
        if (name === 'Add to my collection') {
          handleClick = async () => {
            const result = await addAlbumToCollection(albumId);

            push(`${currentPath}/?modal=${result}`);
          };
        }

        return (
          <Button
            key={name}
            className='flex items-center gap-2 p-3 bg-black/30 rounded-2xl backdrop-blur-md'
            onClick={handleClick}
          >
            <Icon className='text-secondary' size={16} variant='Bold' />
            {name}
          </Button>
        );
      })}
    </div>
  );
};

export default AlbumButtons;
