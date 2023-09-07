import { Album } from '@/models';
import CollectionCard from './CollectionCard';

interface IProps {
  cards: Album[];
}

const CollectionCards = ({ cards }: IProps) => (
  <div className='flex flex-col flex-wrap sm:flex-row gap-6'>
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
