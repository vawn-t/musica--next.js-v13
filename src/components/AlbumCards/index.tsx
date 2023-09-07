import { Album } from '@/models';
import AlbumCard from './AlbumCard';

interface IProps {
  items: Album[];
}

const AlbumCards = ({ items: cards }: IProps) => (
  <div className='flex gap-7 overflow-y-auto'>
    {cards.map((card) => (
      <AlbumCard key={card.id} thumbnail={card.thumbnail} name={card.name} />
    ))}
  </div>
);

export default AlbumCards;
