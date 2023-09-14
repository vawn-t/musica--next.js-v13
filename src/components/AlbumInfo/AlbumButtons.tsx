'use client';

import { useCallback, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MusicSquareAdd, MusicSquareRemove, PlayCircle } from 'iconsax-react';
import { mutate } from 'swr';

// Components
import Button from '@components/Button';

// Models
import { Album } from '@models/index';

// Services
import {
  updateAlbumToCollection,
  updateCurrentPlayer
} from '@/services/me.service';

// Constants
import { APIKey, NAVIGATION } from '@constants/index';

// Utils
import { isAddedAlbum } from '@/utils';

// Types
import type { UpdateToCollectionRequest } from '@/types';
import { revalidatePath, revalidateTag } from 'next/cache';

interface IProp {
  albumId: number;
  myCollection: Album[];
  firstSongId: number;
}

const AlbumButtons = ({ albumId, myCollection = [], firstSongId }: IProp) => {
  const currentPath = usePathname();
  const { push, refresh } = useRouter();

  const { albumExists, currentAlbums } = isAddedAlbum(myCollection, albumId);

  const updateMyCollection = useCallback(
    async (payload: UpdateToCollectionRequest) => {
      const result = await updateAlbumToCollection(payload);

      // should refresh to load new data
      refresh();

      push(`${currentPath}/?popup=${result}`);
    },
    [currentPath, push, refresh]
  );

  const handleAddToMyCollection = useCallback(() => {
    const updatedAlbums = [...currentAlbums, { id: albumId }];

    const payload = { albums: updatedAlbums };

    updateMyCollection(payload);
  }, [albumId, currentAlbums, updateMyCollection]);

  const handleRemoveFromMyCollection = useCallback(() => {
    const updatedAlbums = currentAlbums.filter((album) => album.id !== albumId);

    const payload = { albums: updatedAlbums };

    updateMyCollection(payload);
  }, [albumId, currentAlbums, updateMyCollection]);

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
        name: `${albumExists ? 'Remove from' : 'Add to'} my collection`,
        icon: albumExists ? MusicSquareRemove : MusicSquareAdd,
        handleClick: albumExists
          ? handleRemoveFromMyCollection
          : handleAddToMyCollection
      }
    ],
    [
      handlePlayAll,
      albumExists,
      handleRemoveFromMyCollection,
      handleAddToMyCollection
    ]
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
