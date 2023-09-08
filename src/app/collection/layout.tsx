import { Metadata } from 'next';

import { METADATA } from '@constants/index';

export const metadata: Metadata = {
  title: METADATA.COLLECTION.title
};

const CollectionLayout = (props: { children: React.ReactNode }) => {
  return <>{props.children}</>;
};

export default CollectionLayout;
