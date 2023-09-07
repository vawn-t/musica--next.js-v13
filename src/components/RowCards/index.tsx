import { Album } from '@/models';
import RowCard from './RowCard';

interface IProps {
  items: Album[];
}

const RowCards = ({ items }: IProps) => {
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
