import Error from 'next/error';

// Constants
import { COLLECTION, FetchType } from '@constants/index';

// Services
import { fetcher } from './clientRequest';

// Types
import { GetMyCollection } from '@/types';

// Models
import { Album, AlbumAttributes } from '@models/index';

export const getMyCollection = async () => {
  const data = await fetcher<GetMyCollection>(
    COLLECTION.getMyCollection,
    FetchType.isr
  );

  const albums: Album[] = data.albums.map(
    ({ id, ...rest }) => new Album({ id, attributes: rest as AlbumAttributes })
  );

  return albums;
};
