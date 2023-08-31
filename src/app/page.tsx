'use client';

import { Song } from '@/models';
import Navigation from '../components/Navigation/index';
import Songs from '../components/Songs/index';

// const getMe = async () => {
//   const res = await fetch(`${process.env.DB_HOST}/albums/1?populate=*`, {
//     method: 'GET'
//   });

//   console.log('res', res);

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// };

export default function Home() {
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
  return (
    <main>
      {/* TODO: Just for test. Will be removed soon */}
      Fetch data from DB
      <Navigation />
      <Songs songs={songs} />
    </main>
  );
}
