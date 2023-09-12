import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Services
import { getAlbumById } from '@/services/album.service';

// Utils
import { formatDuration } from '@utils/index';
import SkeletonCollectionPage from '@/components/Loading/SkeletonCollectionPage';
import SkeletonRaw from '@/components/Loading/SkeletonRow';
import MessagePopup from '@/components/MessagePopup';
import { MessageType } from '@/constants';

// Components
const AlbumInfo = dynamic(() => import('@components/AlbumInfo'));
const Songs = dynamic(() => import('@components/Songs'));

interface IProp {
  searchParams: { modal: MessageType } | null | undefined;
  params: { id: number };
}

const Album = async ({ params, searchParams }: IProp) => {
  const { id, attributes: albumAttributes } = await getAlbumById(params.id);

  console.log('searchParams', searchParams);

  return (
    <section className='flex flex-col gap-6 sm:gap-12'>
      {searchParams?.modal && <MessagePopup status={searchParams.modal} />}
      <Suspense fallback={<SkeletonCollectionPage />}>
        <AlbumInfo
          albumId={id}
          description={albumAttributes.description}
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
