import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Services
import { getAlbumsOrderBy } from '@/services/album';
import { getFirstBanner } from '@/services/banner';

// Constants
import { AlbumOrderOption, TagKey, TagType } from '@constants/index';

// Components
const SkeletonCard = dynamic(() => import('@components/Loading/SkeletonCard'));
const SkeletonImage = dynamic(
  () => import('@components/Loading/SkeletonImage')
);
const Typography = dynamic(() => import('@components/Typography'));
const RowCards = dynamic(() => import('@/components/Cards/RowCards'));
const AlbumCards = dynamic(() => import('@/components/Cards/AlbumCards'));
const BannerComponent = dynamic(() => import('@components/Banner'));

const Home = async () => {
  const banner = await getFirstBanner();

  const albumsOrderByRecentlyPlayed = await getAlbumsOrderBy(
    AlbumOrderOption.recentlyPlayed,
    [TagKey.SyncPlayedTime]
  );
  const albumsOrderByReleased = await getAlbumsOrderBy(
    AlbumOrderOption.release
  );
  const albumsOrderByPopularity = await getAlbumsOrderBy(
    AlbumOrderOption.popularity
  );

  return (
    <>
      <section className='sm:flex sm:justify-between sm:gap-8'>
        <section className='pb-12 sm:pb-0 sm:basis-4/5'>
          <Suspense fallback={<SkeletonImage />}>
            <BannerComponent banner={banner} />
          </Suspense>
        </section>
        <section className='sm:basis-2/6 w-full'>
          <Typography Tag={TagType.h3} className='font-bold pb-4'>
            Recently played
          </Typography>
          <Suspense fallback={<SkeletonCard />}>
            <RowCards items={albumsOrderByRecentlyPlayed} />
          </Suspense>
        </section>
      </section>
      <section className='pt-12'>
        <Typography Tag={TagType.h3} className='font-bold pb-4'>
          New releases.
        </Typography>
        <Suspense fallback={<SkeletonCard />}>
          <AlbumCards items={albumsOrderByReleased} />
        </Suspense>
      </section>
      <section className='pt-12'>
        <Typography Tag={TagType.h3} className='font-bold pb-4'>
          Popularity.
        </Typography>
        <Suspense fallback={<SkeletonCard />}>
          <AlbumCards items={albumsOrderByPopularity} />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
