import Image from 'next/image';
import Typography from '@/components/Typography';
import { TagType } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classNames from 'classnames';

type Props = {
  iconUrl: string;
  name: string;
  route: string;
};

const Item = ({ name, route, iconUrl }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={route}
      className={classNames('flex gap-6', {
        ['opacity-25']: pathname !== route
      })}
    >
      <Image src={iconUrl} alt={name} width={28} height={28} />
      <Typography Tag={TagType.h4} className={'sm:hidden font-bold'}>
        {name}
      </Typography>
    </Link>
  );
};

export default Item;
