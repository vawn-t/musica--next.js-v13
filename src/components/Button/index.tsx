import { ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

const Button = ({ children, className = '', onClick }: Props) => (
  <button
    type='button'
    className={classNames('cursor-pointer', className)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
