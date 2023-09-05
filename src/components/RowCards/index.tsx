import { Album } from '@/models';
import RowCard from './RowCard';

type Props = {
  items: Album[];
};

const RowCards = ({ items }: Props) => {
  return (
    <div className='flex sm:flex-col overflow-auto gap-2'>
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
