import { getAlbumInfo } from '@/services/album';
import { Metadata } from 'next';

type Props = {
  params: { id: number };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {
    data: { attributes }
  } = await getAlbumInfo(params.id);

  return {
    title: attributes.name,
    description: attributes.description,
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
      userScalable: true
    }
  };
}

const AlbumLayout = (props: { children: React.ReactNode }) => {
  return <>{props.children}</>;
};

export default AlbumLayout;
