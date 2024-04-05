import classNames from 'classnames';

interface BurgerMenuProps {
  onClick: () => void;
  isMenuOpen: boolean;
  className?: string;
}

const BurgerMenu: React.FC<BurgerMenuProps> = (props) => {
  const { isMenuOpen, onClick, className } = props;
  const iterations = [0, 1, 2];

  return (
    <div
      className={classNames(
        'burger-menu flex-col items-center justify-between h-12 w-12 p-2 box-border cursor-pointer relative border border-solid rounded-lg border-purple-600',
        className
      )}
      onClick={onClick}>
      {iterations.map((iteration) => (
        <div
          key={`burger-line-${iteration}`}
          className={classNames(
            'burger-line overflow-hidden h-1 w-full bg-black border-r-2 relative origin-center transition-all duration-50 ease-in-out',
            { 'scale-0': isMenuOpen && (iteration === 0 || iteration === 2) }
          )}></div>
      ))}
    </div>
  );
};

export default BurgerMenu;
