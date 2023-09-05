import { Metadata } from 'next';

import { METADATA } from '@constants/index';

export const metadata: Metadata = {
  title: METADATA.HOME.title,
  description: METADATA.HOME.description
};

const HomeLayout = (props: { children: React.ReactNode }) => {
  return <>{props.children}</>;
};

export default HomeLayout;
