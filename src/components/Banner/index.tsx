import Link from 'next/link';
import Image from 'next/image';

// Components
import Typography from '@components/Typography';

// Constants
import { TagType } from '@constants/index';

// Models
import { Banner as BannerType } from '@models/index';

// Utils
import imageLoader from '@utils/imageLoader';
import { generatePlaceholder } from '@utils/index';

interface IProps {
  banner: BannerType;
}

const Banner = ({ banner: { description, title, url, imgUrl } }: IProps) => {
  return (
    <Link
      href={url}
      className='relative w-full h-[31rem] px-8 pt-8 pb-32 sm:p-12 flex flex-col justify-end sm:justify-center gap-2 rounded-lg sm:rounded-3xl overflow-hidden'
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
        placeholder={`data:image/${generatePlaceholder(160, 160)}`}
      />
      <Typography className='font-extrabold' Tag={TagType.h1}>
        {title}
      </Typography>
      <Typography Tag={TagType.span}>{description}</Typography>
    </Link>
  );
};

export default Banner;
