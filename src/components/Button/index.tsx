import { ReactNode, memo } from 'react';
import classNames from 'classnames';

interface IProps {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

const Button = ({ children, className = '', onClick }: IProps) => (
  <button
    type='button'
    className={classNames('cursor-pointer', className)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default memo(Button);
