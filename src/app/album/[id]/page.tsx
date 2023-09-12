import dynamic from 'next/dynamic';

// Services
import { getAlbumById } from '@services/index';

// Utils
import { createAlbum, formatDuration } from '@utils/index';

// Components
const AlbumInfo = dynamic(() => import('@components/AlbumInfo'));
const Songs = dynamic(() => import('@components/Songs'));

const Album = async ({ params }: { params: { id: number } }) => {
  const { data } = await getAlbumById(params.id);

  const { attributes } = createAlbum(data);

  return (
    <section className='flex flex-col gap-6 sm:gap-12'>
      <AlbumInfo
        description={attributes.description}
        totalDuration={formatDuration(attributes.duration)}
        totalSong={attributes.songs.length}
        name={attributes.name}
        thumbnail={attributes.thumbnail as string}
      />
      <Songs songs={attributes.songs} />
    </section>
  );
};
export default Album;
