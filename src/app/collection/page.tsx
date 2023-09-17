import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Components
const CollectionCards = dynamic(() => import('@components/CollectionCards'));
const Button = dynamic(() => import('@components/Button'));
const SkeletonImage = dynamic(
  () => import('@components/Loading/SkeletonImage')
);

// Services
import { getMyCollection } from '@/services/me';

const Collection = async () => {
  const albums = await getMyCollection();

  return (
    <section className='pb-32'>
      <Button
        className='w-auto py-3 px-4 mb-7 text-dark bg-secondary text-base rounded-xl'
        name='My collection'
      >
        My collection
      </Button>

      <Suspense fallback={<SkeletonImage />}>
        <CollectionCards cards={albums} />
      </Suspense>
    </section>
  );
};
export default Collection;
