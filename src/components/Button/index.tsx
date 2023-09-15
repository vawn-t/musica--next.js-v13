import { ReactNode, memo } from 'react';
import classNames from 'classnames';

interface IProps {
  children: ReactNode;
  className?: string;
  name: string;
  onClick?: () => void;
}

const Button = ({ children, className = '', name, onClick }: IProps) => (
  <button
    aria-label={name}
    type='button'
    className={classNames('cursor-pointer', className)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default memo(Button);
