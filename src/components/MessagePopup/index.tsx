'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { MessageType } from '@/constants';

interface IProps {
  status: MessageType;
}

const MessagePopup = ({ status }: IProps) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const displayInterval: any = setInterval(() => {
      setHidden(true);
    }, 3000);

    return () => {
      clearInterval(displayInterval);
    };
  }, []);

  return (
    <div
      className={classNames('absolute top-12 right-8 w-36', {
        hidden: hidden
      })}
    >
      <div className='relative bg-light rounded-lg shadow'>
        <div
          className={`p-4 text-center font-bold capitalize ${
            status === MessageType.error ? 'text-red-500' : 'text-primary'
          }`}
        >
          {status}!
        </div>
      </div>
    </div>
  );
};

export default MessagePopup;
