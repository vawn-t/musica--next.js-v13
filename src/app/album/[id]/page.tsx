import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Services
import { getAlbumById } from '@/services/album.service';
import { getMyCollection } from '@/services/me.service';

// Utils
import { formatDuration } from '@utils/index';

// Constants
import { MessageType } from '@/constants';

// Components
import SkeletonCollectionPage from '@/components/Loading/SkeletonCollectionPage';
import SkeletonRaw from '@/components/Loading/SkeletonRow';
import MessagePopup from '@/components/MessagePopup';
const AlbumInfo = dynamic(() => import('@components/AlbumInfo'));
const Songs = dynamic(() => import('@components/Songs'));

interface IProp {
  searchParams: { modal: MessageType } | null | undefined;
  params: { id: number };
}

const Album = async ({ params }: IProp) => {
  const { id, attributes: albumAttributes } = await getAlbumById(params.id);
  const myCollection = await getMyCollection();

  return (
    <section className='flex flex-col gap-6 sm:gap-12'>
      <MessagePopup />
      <Suspense fallback={<SkeletonCollectionPage />}>
        <AlbumInfo
          albumId={id}
          myCollection={myCollection}
          description={albumAttributes.description}
          firstSongId={albumAttributes.songs[0].id}
          totalDuration={formatDuration(albumAttributes.duration)}
          totalSong={albumAttributes.songs.length}
          name={albumAttributes.name}
          thumbnail={albumAttributes.thumbnail as string}
        />
      </Suspense>
      <Suspense fallback={<SkeletonRaw />}>
        <Songs albumId={params.id} songs={albumAttributes.songs} />
      </Suspense>
    </section>
  );
};
export default Album;
