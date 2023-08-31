import Link from 'next/link';
import Image from 'next/image';
import imageLoader from '@/utils/imageLoader';
import Typography from '@/components/Typography';
import { TagType } from '@/constants';

type Props = {
  url: string;
  description: string;
  imgUrl: string;
  title: string;
};

const Banner = ({ description, title, url, imgUrl }: Props) => {
  return (
    <Link
      href={url}
      className='relative w-full h-[31rem] px-8 pt-8 pb-28 sm:p-12 flex flex-col justify-end sm:justify-center gap-2 rounded-lg sm:rounded-3xl overflow-hidden '
    >
      <Image
        alt='Banner'
        className='absolute object-cover -z-10'
        src={imgUrl}
        fill
        loader={imageLoader}
        loading='eager'
        sizes='100%'
      />
      <Typography className='font-extrabold' Tag={TagType.h1}>
        {title}
      </Typography>
      <Typography Tag={TagType.span}>{description}</Typography>
    </Link>
  );
};

export default Banner;
