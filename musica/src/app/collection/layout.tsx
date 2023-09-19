import { Metadata } from 'next';

import { METADATA } from '@constants/index';

export const metadata: Metadata = {
  title: METADATA.COLLECTION.title,
  description: METADATA.COLLECTION.description,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true
  }
};

const CollectionLayout = (props: { children: React.ReactNode }) => {
  return <>{props.children}</>;
};

export default CollectionLayout;
