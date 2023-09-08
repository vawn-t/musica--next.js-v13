import { Album } from '@models/index';
import AlbumCard from './AlbumCard';

interface IProps {
  items: Album[];
}

const AlbumCards = ({ items: cards }: IProps) => (
  <div className='flex flex-wrap gap-7 overflow-y-auto'>
    {cards.map((card) => (
      <AlbumCard
        key={card.id}
        id={card.id}
        thumbnail={card.thumbnail}
        name={card.name}
      />
    ))}
  </div>
);

export default AlbumCards;
