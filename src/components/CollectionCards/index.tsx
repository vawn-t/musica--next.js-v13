import { Album, Thumbnail } from '@models/index';
import CollectionCard from './CollectionCard';

interface IProps {
  cards: Album[];
}

const CollectionCards = ({ cards }: IProps) => (
  <div className='flex flex-col flex-wrap sm:flex-row gap-6'>
    {cards.map(({ id, attributes }) => (
      <CollectionCard
        key={id}
        id={id}
        name={attributes.name}
        thumbnail={(attributes.thumbnail as Thumbnail).url}
      />
    ))}
  </div>
);

export default CollectionCards;
