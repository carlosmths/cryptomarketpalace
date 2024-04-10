import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Theme } from 'types/sharedTypes';
import ArrowRight from 'assets/arrow-right.svg?react';
import Spinner from 'assets/spinner.svg?react';

enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  next = 'next',
}

type ButtonTypes = HTMLAnchorElement | HTMLButtonElement;
interface ButtonProps<T extends ButtonTypes> extends React.AnchorHTMLAttributes<T>, React.ButtonHTMLAttributes<T> {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  theme?: Theme;
  type?: 'submit' | 'reset' | 'button';
  isLoading?: boolean;
}

const getIcon = (): React.ReactElement => (
  <i className="flex items-center h-full w-4 ml-0.5">
    <ArrowRight />
  </i>
);

const Button: React.FC<ButtonProps<HTMLAnchorElement | HTMLButtonElement>> = ({
  children,
  variant = ButtonVariant.primary,
  href,
  className,
  theme = Theme.light,
  isLoading,
  ...rest
}) => {
  const commonClasses = classNames(
    'link-button flex justify-center items-center py-4 px-6 lg:py-3 lg:px-5 rounded-lg box-border font-semibold min-h-5 disabled:opacity-70',
    variant === ButtonVariant.primary && {
      'bg-purple-600 text-white hover:enabled:bg-purple-800': theme === Theme.light,
      'bg-white text-purple-950 hover:enabled:bg-gray-200': theme === Theme.dark,
    },
    variant === ButtonVariant.secondary && [
      'border border-solid',
      {
        'border-purple-600 text-purple-600 hover:enabled:text-purple-800 hover:border-purple-800':
          theme === Theme.light,
        'border-white bg-transparent hover:enabled:border-gray-400 hover:text-gray-400': theme === Theme.dark,
      },
    ],
    variant === ButtonVariant.next && [
      'flex items-center border-none',
      {
        'hover:enabled:text-purple-800': theme === Theme.light,
        'text-white hover:enabled:text-gray-200': theme === Theme.dark,
      },
    ],
    className
  );

  const renderChildren = (): React.ReactNode => {
    return isLoading ? (
      <Spinner className="h-5 p-1" />
    ) : (
      <>
        {children}
        {variant === ButtonVariant.next && getIcon()}
      </>
    );
  };

  if (href) {
    return (
      <Link to={href} className={commonClasses} {...rest}>
        {renderChildren()}
      </Link>
    );
  }
  return (
    <button className={commonClasses} {...rest} disabled={isLoading}>
      {renderChildren()}
    </button>
  );
};

export { Button, ButtonVariant };
