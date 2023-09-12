import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Services
import { getAlbumsOrderBy } from '@services/album.service';
import { getFirstBanner } from '@/services/banner.service';

// Models
import { Album, Banner } from '@models/index';

// Constants
import { AlbumOrderOption, TagType } from '@constants/index';

// Utils
import { createAlbums } from '@utils/index';

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

  const recentlyPlayedAlbums: Album[] = createAlbums(
    albumsOrderByRecentlyPlayed
  );
  const recentlyReleasedAlbums: Album[] = createAlbums(albumsOrderByReleased);
  const popularityAlbums: Album[] = createAlbums(albumsOrderByPopularity);

  return (
    <>
      <section className='sm:flex sm:justify-between sm:gap-8'>
        <section className='pb-12 sm:pb-0 sm:basis-4/5'>
          <Suspense fallback={<SkeletonImage />}>
            <BannerComponent banner={banner} />
          </Suspense>
        </section>
        <section className='sm:basis-2/6 w-full'>
          <Typography Tag={TagType.h3} className='font-bold'>
            Recently played
          </Typography>
          <Suspense fallback={<SkeletonCard />}>
            <RowCards items={recentlyPlayedAlbums} />
          </Suspense>
        </section>
      </section>
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
