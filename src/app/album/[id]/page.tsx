import dynamic from 'next/dynamic';

const AlbumInfo = dynamic(() => import('@components/AlbumInfo'));

const Album = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <section>Album: {params.id}</section>
      <AlbumInfo
        description='Lorem ipsum dolor sit  amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'
        totalDuration={16}
        totalSong={64}
        title={`Tomorrow's tunes`}
        thumbnail='https://res.cloudinary.com/drwsfgt0t/image/upload/v1692929785/ab67616d00001e0219b6ab951ea24234ed711054_46afb682e1.jpg'
      />
    </>
  );
};
export default Album;
