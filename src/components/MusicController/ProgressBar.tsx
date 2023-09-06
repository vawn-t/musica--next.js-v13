import { MouseEvent } from 'react';
import classNames from 'classnames';

type Props = {
  className: string;
  maxRange: number;
  value: number;
  onClick: (event: MouseEvent<HTMLProgressElement>) => void;
};

const ProgressBar = ({ className = '', maxRange, value, onClick }: Props) => (
  <progress
    className={classNames(
      'cursor-pointer [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-light/25 [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-secondary',
      className
    )}
    value={value}
    max={maxRange}
    onClick={onClick}
  />
);

export default ProgressBar;
