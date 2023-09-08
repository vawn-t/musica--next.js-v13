import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  // TODO: Should replace by api
  const album = {
    title: `Tomorrow's tunes`,
    description: `Lorem ipsum dolor sit  amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis`
  };

  return {
    title: album.title,
    description: album.description
  };
}

const AlbumLayout = (props: { children: React.ReactNode }) => {
  return <>{props.children}</>;
};

export default AlbumLayout;
