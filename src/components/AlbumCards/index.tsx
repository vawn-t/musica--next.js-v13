import { Card } from '@/models';
import AlbumCard from './AlbumCard';

type Props = {
  cards: Card[];
};

const AlbumCards = ({ cards }: Props) => (
  <div className='flex gap-7 px-3 overflow-y-auto'>
    {cards.map((card) => (
      <AlbumCard key={card.id} thumbnail={card.thumbnail} name={card.name} />
    ))}
  </div>
);

export default AlbumCards;
