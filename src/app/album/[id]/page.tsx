import dynamic from 'next/dynamic';

// Models
import { Song } from '@/models';

// Components
const AlbumInfo = dynamic(() => import('@components/AlbumInfo'));
const Songs = dynamic(() => import('@components/Songs'));

const Album = ({ params }: { params: { id: string } }) => {
  return (
    <div className='flex flex-col gap-6 sm:gap-12 pb-28'>
      <AlbumInfo
        description='Lorem ipsum dolor sit  amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'
        totalDuration={16}
        totalSong={64}
        title={`Tomorrow's tunes`}
        thumbnail='https://res.cloudinary.com/drwsfgt0t/image/upload/v1692929785/ab67616d00001e0219b6ab951ea24234ed711054_46afb682e1.jpg'
      />
      <Songs
        songs={
          [
            {
              id: 1,
              title: 'Song 1',
              duration: 100,
              artist: ['Hoàng Tôn', '16Typh']
            },
            {
              id: 2,
              title: 'Song 2',
              duration: 120,
              artist: ['Hoàng Tôn']
            }
          ] as Song[]
        }
      />
    </div>
  );
};
export default Album;
