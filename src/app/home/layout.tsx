import { Metadata } from 'next';

import { METADATA } from '@constants/index';

export const metadata: Metadata = {
  title: METADATA.HOME.title,
  description: METADATA.HOME.description,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  }
};

const HomeLayout = (props: { children: React.ReactNode }) => {
  return <>{props.children}</>;
};

export default HomeLayout;
