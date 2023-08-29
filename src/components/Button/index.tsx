import classNames from 'classnames';

type Props = {
  label?: string;
  icon?: JSX.Element;
  onClick: () => void;
};

const Button = ({ label, icon, onClick }: Props) => (
  <button
    onClick={onClick}
    className={classNames('cursor-pointer', {
      ['flex justify-center py-2.5 px-4 bg-white/30 rounded-2xl hover:bg-white/50']:
        !!label
    })}
  >
    {icon}
    {!!label && <span className='pl-2'>{label}</span>}
  </button>
);

export default Button;
