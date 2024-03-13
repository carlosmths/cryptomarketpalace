import classNames from 'classnames';
import { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  variant = 'primary',
  href,
  className,
  ...rest
}) => {
  return (
    <Link
      to={href}
      {...rest}
      className={classNames(
        'flex justify-center items-center py-3 px-5 rounded-lg',
        {
          'bg-purple-600 text-white hover:bg-purple-800': variant === 'primary',
        },
        {
          'border-2 border-solid border-purple-600 text-purple-600 hover:text-purple-800 hover:border-purple-800':
            variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </Link>
  );
};

export { LinkButton };
