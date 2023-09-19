import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Services
import { getAlbumById, getAllAlbumIds } from '@/services/album';
import { getMyCollectionIds } from '@/services/me';

// Utils
import { formatDuration } from '@utils/index';

// Constants
import { MessageType } from '@/constants';

// Components
import SkeletonCollection from '@/components/Loading/SkeletonCollection';
import SkeletonRaw from '@/components/Loading/SkeletonRow';
import MessagePopup from '@/components/Popup';
import Spinner from '@/components/Loading/Spinner';
const AlbumInfo = dynamic(() => import('@components/AlbumInfo'));
const Songs = dynamic(() => import('@components/Songs'));

interface IProp {
  searchParams: { modal: MessageType } | null | undefined;
  params: { id: number };
}

export async function generateStaticParams() {
  const albumIds = await getAllAlbumIds();

  return albumIds.map((album) => ({ id: album.id.toString() }));
}

const Album = async ({ params }: IProp) => {
  const { id, attributes: albumAttributes } = await getAlbumById(params.id);
  const myCollectionIds = await getMyCollectionIds();

  return (
    <section className='flex flex-col gap-6 sm:gap-12'>
      <Suspense fallback={<Spinner />}>
        <MessagePopup />
      </Suspense>
      <Suspense fallback={<SkeletonCollection />}>
        <AlbumInfo
          albumId={id}
          myCollectionIds={myCollectionIds}
          description={albumAttributes.description}
          firstSongId={albumAttributes.songs[0].id}
          totalDuration={formatDuration(albumAttributes.duration)}
          totalSong={albumAttributes.songs.length}
          name={albumAttributes.name}
          thumbnail={albumAttributes.thumbnail as string}
        />
      </Suspense>
      <Suspense fallback={<SkeletonRaw />}>
        <Songs songs={albumAttributes.songs} />
      </Suspense>
    </section>
  );
};
export default Album;
