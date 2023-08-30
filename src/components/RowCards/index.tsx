import { Card } from '@/models';
import RowCard from './RowCard';

type Props = {
  items: Card[];
};

const RowCards = ({ items }: Props) => {
  return (
    <div className='flex sm:flex-col overflow-auto gap-2 px-3'>
      {items.map((item) => (
        <RowCard
          key={item.id}
          duration={item.duration}
          name={item.name}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
};

export default RowCards;
