// Models
import { Song as SongModel } from '@/models';

// Components
import Song from './SongComponent';

interface IProps {
  songs: SongModel[];
}

const Songs = ({ songs }: IProps) => {
  return (
    <section className='flex flex-col gap-4 pb-32'>
      {songs.map(({ id, attributes }, index) => (
        <Song
          key={id}
          id={id}
          artists={attributes.artists}
          duration={attributes.duration}
          index={index}
          name={attributes.name}
        />
      ))}
    </section>
  );
};

export default Songs;
