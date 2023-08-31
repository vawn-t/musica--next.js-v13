import Link from 'next/link';
import Image from 'next/image';
import imageLoader from '@/utils/imageLoader';
import Typography from '@/components/Typography';
import { TagType } from '@/constants';

type Props = {
  externalUrl: string;
  imgUrl: string;
  title: string;
  description: string;
  type: string;
};

const Banner = ({ description, title, externalUrl, imgUrl, type }: Props) => {
  return (
    <Link href={externalUrl}>
      <Image
        src={imgUrl}
        alt='Banner'
        width={686}
        height={373}
        loader={imageLoader}
        loading='eager'
      />
      <Typography Tag={TagType.h5}>{type}</Typography>
      <Typography Tag={TagType.h1}>{title}</Typography>
      <Typography Tag={TagType.span}>{description}</Typography>
    </Link>
  );
};

export default Banner;
