import { memo } from 'react';
import { Play } from 'iconsax-react';
import Button from '@components/Button';

const RowCardButton = () => {
  return (
    <Button
      className='self-center absolute right-4 sm:right-8 w-9 h-9 flex justify-center items-center rounded-full border-2 border-light'
      name='play all button'
    >
      <Play className='text-secondary' variant='Bold' size={18} />
    </Button>
  );
};

export default memo(RowCardButton);
