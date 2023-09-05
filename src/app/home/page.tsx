import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import { getAlbumsOrderBy, getFirstBanner } from '@services/index';
import { Album, Banner } from '@models/index';
import { AlbumOrderOption, TagType } from '@constants/index';
import { createAlbum } from '@utils/index';

// Components
const SkeletonCard = dynamic(() => import('@components/Loading/SkeletonCard'));
const SkeletonImage = dynamic(
  () => import('@components/Loading/SkeletonImage')
);
const Typography = dynamic(() => import('@components/Typography'));
const RowCards = dynamic(() => import('@components/RowCards'));
const AlbumCards = dynamic(() => import('@components/AlbumCards'));
const BannerComponent = dynamic(() => import('@components/Banner'));

const Home = async () => {
  const {
    data: {
      attributes: { description, title, url, background }
    }
  } = await getFirstBanner();
  const { data: albumsOrderByRecentlyPlayed } = await getAlbumsOrderBy(
    AlbumOrderOption.recentlyPlayed
  );
  const { data: albumsOrderByReleased } = await getAlbumsOrderBy(
    AlbumOrderOption.release
  );
  const { data: albumsOrderByPopularity } = await getAlbumsOrderBy(
    AlbumOrderOption.popularity
  );

  const banner = new Banner({
    description,
    title,
    url,
    background,
    imgUrl: background.data.attributes.url
  });

  const recentlyPlayedAlbums: Album[] = createAlbum(
    albumsOrderByRecentlyPlayed
  );
  const recentlyReleasedAlbums: Album[] = createAlbum(albumsOrderByReleased);
  const popularityAlbums: Album[] = createAlbum(albumsOrderByPopularity);

  return (
    <>
      <div className='sm:flex sm:justify-between sm:gap-8'>
        <Suspense fallback={<SkeletonImage />}>
          <section className='pb-12 sm:basis-4/5'>
            <BannerComponent banner={banner} />
          </section>
        </Suspense>
        <section className='sm:basis-2/6 w-full'>
          <Typography Tag={TagType.h3} className='font-bold'>
            Recently played
          </Typography>
          <Suspense fallback={<SkeletonCard />}>
            <RowCards items={recentlyPlayedAlbums} />
          </Suspense>
        </section>
      </div>
      <section className='pt-12'>
        <Typography Tag={TagType.h3} className='font-bold pb-4'>
          New releases.
        </Typography>
        <Suspense fallback={<SkeletonCard />}>
          <AlbumCards items={recentlyReleasedAlbums} />
        </Suspense>
      </section>
      <section className='pt-12'>
        <Typography Tag={TagType.h3} className='font-bold pb-4'>
          Popularity.
        </Typography>
        <Suspense fallback={<SkeletonCard />}>
          <AlbumCards items={popularityAlbums} />
        </Suspense>
      </section>
    </>
  );
};
export default Home;
