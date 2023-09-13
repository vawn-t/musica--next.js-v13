'use client';

import { useCallback, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MusicSquareAdd, PlayCircle } from 'iconsax-react';
import { mutate } from 'swr';

// Components
import Button from '@components/Button';

// Models
import {
  addAlbumToCollection,
  updateCurrentPlayer
} from '@/services/me.service';

// Constants
import { APIKey } from '@constants/index';

interface IProp {
  albumId: number;
  firstSongId: number;
}

const AlbumButtons = ({ albumId, firstSongId }: IProp) => {
  const currentPath = usePathname();
  const { push } = useRouter();

  const handleAddToMyCollection = useCallback(async () => {
    const result = await addAlbumToCollection(albumId);

    push(`${currentPath}/?modal=${result}`);
  }, [albumId, currentPath, push]);

  const handlePlayAll = useCallback(async () => {
    await updateCurrentPlayer({ song: firstSongId, album: albumId });
    await mutate(APIKey.me);
  }, [albumId, firstSongId]);

  const albumButtonProps = useMemo(
    () => [
      {
        name: 'Play all',
        icon: PlayCircle,
        handleClick: handlePlayAll
      },
      {
        name: 'Add to my collection',
        icon: MusicSquareAdd,
        handleClick: handleAddToMyCollection
      }
    ],
    [handleAddToMyCollection, handlePlayAll]
  );

  return (
    <div className='flex gap-2 pt-6 sm:pt-10'>
      {albumButtonProps.map(({ name, icon: Icon, handleClick }) => {
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
