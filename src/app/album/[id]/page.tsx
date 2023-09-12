import dynamic from 'next/dynamic';

// Services
import { getAlbumById } from '@/services/album.service';

// Utils
import { formatDuration } from '@utils/index';
import { Suspense } from 'react';
import SkeletonCollectionPage from '@/components/Loading/SkeletonCollectionPage';
import SkeletonRaw from '@/components/Loading/SkeletonRow';

// Components
const AlbumInfo = dynamic(() => import('@components/AlbumInfo'));
const Songs = dynamic(() => import('@components/Songs'));

const Album = async ({ params }: { params: { id: number } }) => {
  const { id, attributes: albumAttributes } = await getAlbumById(params.id);

  return (
    <section className='flex flex-col gap-6 sm:gap-12'>
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
