'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import classNames from 'classnames';

// Constants
import { MessageType } from '@/constants';

interface IProps {}

const MessagePopup = ({}: IProps) => {
  const pathName = usePathname();
  const { replace } = useRouter();
  const { get } = useSearchParams();

  const [hidden, setHidden] = useState(true);
  const [status, setStatus] = useState<MessageType | null>(null);

  useEffect(() => {
    const status = get('popup') as MessageType;

    if (!status) {
      setHidden(true);
      return;
    }

    setStatus(status);
    setHidden(false);

    const displayInterval: any = setInterval(() => {
      setHidden(true);

      // remove search param
      replace(pathName);
    }, 3000);

    return () => {
      clearInterval(displayInterval);
    };
  }, [get, replace, pathName]);

  return (
    <div
      className={classNames('absolute top-12 right-8 w-36', {
        hidden: hidden
      })}
    >
      <div className='relative bg-light rounded-lg shadow'>
        <div
          className={classNames('p-4 text-center font-bold capitalize', {
            ['text-red-500']: status === MessageType.error,
            ['text-primary']: status === MessageType.success
          })}
        >
          {status}!
        </div>
      </div>
    </div>
  );
};

export default MessagePopup;
