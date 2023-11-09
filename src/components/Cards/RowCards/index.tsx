import { Album } from '@/models';
import RowCard from './RowCard';
import { memo } from 'react';

interface IProps {
  items: Album[];
}

const RowCards = ({ items }: IProps) => {
  return (
    <div className='flex sm:flex-col overflow-auto gap-2'>
      {items.map(({ id, attributes }) => (
        <RowCard
          key={id}
          id={id}
          duration={attributes.duration}
          name={attributes.name}
          thumbnail={attributes.thumbnail as string}
        />
      ))}
    </div>
  );
};

export default memo(RowCards);
