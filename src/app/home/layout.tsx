import { Metadata } from 'next';

import { METADATA } from '@constants/index';

export const metadata: Metadata = {
  title: METADATA.HOME.title,
  description: METADATA.HOME.description
};

const HomeLayout = (props: {
  banner: React.ReactNode;
  release: React.ReactNode;
  recentlyPlayed: React.ReactNode;
}) => {
  return (
    <>
      <section>{props.banner}</section>
      <section>{props.recentlyPlayed}</section>
      <section>{props.release}</section>
    </>
  );
};

export default HomeLayout;
