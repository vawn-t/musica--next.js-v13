'use client';

import Navigation from '../components/Navigation/index';
import Song from '../components/Songs/song';

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
  return (
    <main>
      {/* TODO: Just for test. Will be removed soon */}
      Fetch data from DB
      <Navigation />
      <Song
        onClick={() => {}}
        title='title'
        index={1}
        duration='duration'
        isPlaying
      />
      <Song
        onClick={() => {}}
        title='title'
        index={1}
        duration='duration'
        isPlaying={false}
      />
    </main>
  );
}
