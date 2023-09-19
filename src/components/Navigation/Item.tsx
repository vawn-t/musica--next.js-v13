import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { Icon } from 'iconsax-react';

import Typography from '@components/Typography';
import { TagType } from '@constants/index';

interface IProps {
  name: string;
  route: string;
  icon: Icon;
}

const Item = ({ name, route, icon: Icon }: IProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={route}
      className={classNames('flex gap-6', {
        ['opacity-25']: pathname !== route
      })}
      aria-label={name}
    >
      <Icon className='text-secondary' variant='Bold' size={28} />
      <Typography Tag={TagType.h4} className={'sm:hidden font-bold'}>
        {name}
      </Typography>
    </Link>
  );
};

export default Item;
