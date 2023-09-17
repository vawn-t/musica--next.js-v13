import { Album } from '@models/index';
import AlbumCard from './AlbumCard';

interface IProps {
  items: Album[];
}

const AlbumCards = ({ items: cards }: IProps) => (
  <div className='flex flex-wrap gap-7 overflow-y-auto'>
    {cards.map(({ id, attributes }) => (
      <AlbumCard
        key={id}
        id={id}
        thumbnailHash={attributes.thumbnail as string}
        name={attributes.name}
      />
    ))}
  </div>
);

export default AlbumCards;
