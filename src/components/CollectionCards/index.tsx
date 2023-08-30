import { Card } from '@/models';
import CollectionCard from './CollectionCard';

type Props = {
  cards: Card[];
};

const CollectionCards = ({ cards }: Props) => (
  <div className='flex flex-col sm:flex-row gap-6'>
    {cards.map((card) => (
      <CollectionCard
        key={card.id}
        name={card.name}
        thumbnail={card.thumbnail}
      />
    ))}
  </div>
);

export default CollectionCards;
