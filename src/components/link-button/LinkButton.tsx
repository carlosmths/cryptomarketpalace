import classNames from 'classnames';
import { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
}
interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  variant = ButtonVariant.primary,
  href,
  className,
  ...rest
}) => {
  return (
    <Link
      to={href}
      {...rest}
      className={classNames(
        'link-button flex justify-center items-center py-3 px-5 rounded-lg',
        {
          'bg-purple-600 text-white hover:bg-purple-800':
            variant === ButtonVariant.primary,
        },
        {
          'border border-solid border-purple-600 text-purple-600 hover:text-purple-800 hover:border-purple-800':
            variant === ButtonVariant.secondary,
        },
        className
      )}
    >
      {children}
    </Link>
  );
};

export { LinkButton, ButtonVariant };
