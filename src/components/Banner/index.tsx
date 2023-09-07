import Link from 'next/link';
import Image from 'next/image';

import imageLoader from '@utils/imageLoader';
import Typography from '@components/Typography';
import { TagType } from '@constants/index';
import { Banner as BannerType } from '@/models';

interface IProps {
  banner: BannerType;
}

const Banner = ({ banner: { description, title, url, imgUrl } }: IProps) => {
  return (
    <Link
      href={url}
      className='relative w-full h-[31rem] px-8 pt-8 pb-28 sm:p-12 flex flex-col justify-end sm:justify-center gap-2 rounded-lg sm:rounded-3xl overflow-hidden'
      target='_blank'
    >
      <Image
        priority
        alt='Banner'
        className='absolute object-cover -z-10'
        src={imgUrl}
        fill
        loader={imageLoader}
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
