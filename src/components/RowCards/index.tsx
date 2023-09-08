import { Album } from '@/models';
import RowCard from './RowCard';
import { memo } from 'react';

interface IProps {
  items: Album[];
}

const RowCards = ({ items }: IProps) => {
  return (
    <div className='flex sm:flex-col overflow-auto gap-2'>
      {items.map((item) => (
        <RowCard
          key={item.id}
          id={item.id}
          duration={item.duration}
          name={item.name}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
};

export default memo(RowCards);
