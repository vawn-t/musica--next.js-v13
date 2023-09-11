// Models
import { Song as SongModel } from '@/models';

// Components
import Song from './song';

interface IProps {
  songs: SongModel[];
}

const Songs = ({ songs }: IProps) => {
  return (
    <section className='flex flex-col gap-4'>
      {songs.map((song, index) => (
        <Song
          key={song.id}
          id={song.id}
          artists={song.artists}
          duration={song.duration}
          index={index}
          name={song.name}
          // TODO: handle isPlaying
          // isPlaying
        />
      ))}
    </section>
  );
};

export default Songs;
