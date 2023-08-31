import { Song } from '@/models/song';
import Navigation from '../components/Navigation/index';
import Songs from '@/components/Songs/index';
import Banner from '../components/Banner/index';

const getData = async () => {
  const res = await fetch(`${process.env.API_HOST}/banners/1?populate=*`, {
    method: 'GET'
  });

  console.log('res', res);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default async function Home() {
  const {
    data: { attributes }
  } = await getData();
  const songs: Song[] = [
    {
      id: 1,
      title: 'title 1',
      duration: 100,
      artist: 'artist 1'
    },
    {
      id: 2,
      title: 'title 2',
      duration: 23213,
      artist: 'artist 2'
    }
  ];

  const banner = {
    url: attributes.url,
    description: attributes.description,
    imgUrl: attributes.background.data.attributes.url,
    title: attributes.title
  };

  return (
    <main>
      {/* TODO: Just for test. Will be removed soon */}
      Fetch data from DB
      <Navigation />
      <Songs songs={songs} />
      <Banner
        title={banner.title}
        imgUrl={banner.imgUrl}
        description={banner.description}
        url={banner.url}
      />
    </main>
  );
}
