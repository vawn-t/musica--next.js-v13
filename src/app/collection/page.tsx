'use client';

import CollectionCards from '@components/CollectionCards';
import Button from '@components/Button';
import { Album } from '@/models';

const Collection = () => {
  return (
    <section className='pb-32'>
      <Button
        className='py-3 px-4 mb-7 text-dark bg-secondary text-base rounded-xl'
        onClick={() => {}}
      >
        My collection
      </Button>
      <CollectionCards
        cards={
          [
            {
              id: 1,
              attributes: {
                name: 'Card 1',
                thumbnail:
                  'https://res.cloudinary.com/drwsfgt0t/image/upload/v1692929785/ab67616d00001e0219b6ab951ea24234ed711054_46afb682e1.jpg',
                duration: 502
              }
            },
            {
              id: 2,
              attributes: {
                name: 'Card 2',
                thumbnail:
                  'https://res.cloudinary.com/drwsfgt0t/image/upload/v1692929785/ab67616d00001e0219b6ab951ea24234ed711054_46afb682e1.jpg',
                duration: 502
              }
            },
            {
              id: 3,
              attributes: {
                name: 'Card 3',
                thumbnail:
                  'https://res.cloudinary.com/drwsfgt0t/image/upload/v1692929785/ab67616d00001e0219b6ab951ea24234ed711054_46afb682e1.jpg',
                duration: 502
              }
            },
            {
              id: 4,
              attributes: {
                name: 'Card 4',
                thumbnail:
                  'https://res.cloudinary.com/drwsfgt0t/image/upload/v1692929785/ab67616d00001e0219b6ab951ea24234ed711054_46afb682e1.jpg',
                duration: 502
              }
            },
            {
              id: 5,
              attributes: {
                name: 'Card 5',
                thumbnail:
                  'https://res.cloudinary.com/drwsfgt0t/image/upload/v1692929785/ab67616d00001e0219b6ab951ea24234ed711054_46afb682e1.jpg',
                duration: 502
              }
            }
          ] as Album[]
        }
      />
    </section>
  );
};
export default Collection;
