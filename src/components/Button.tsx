import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Theme } from 'types/sharedTypes';
import ArrowRight from 'assets/arrow-right.svg?react';

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
  ...rest
}) => {
  const commonClasses = classNames(
    'link-button flex justify-center items-center py-4 px-6 lg:py-3 lg:px-5 rounded-lg box-border font-semibold',
    variant === ButtonVariant.primary && {
      'bg-purple-600 text-white hover:bg-purple-800': theme === Theme.light,
      'bg-white text-purple-950 hover:bg-gray-200': theme === Theme.dark,
    },
    variant === ButtonVariant.secondary && [
      'border border-solid',
      {
        'border-purple-600 text-purple-600 hover:text-purple-800 hover:border-purple-800': theme === Theme.light,
        'border-white bg-transparent hover:border-gray-400 hover:text-gray-400': theme === Theme.dark,
      },
    ],
    variant === ButtonVariant.next && [
      'flex items-center border-none',
      {
        'hover:text-purple-800': theme === Theme.light,
        'text-white hover:text-gray-200': theme === Theme.dark,
      },
    ],
    className
  );

  if (href) {
    return (
      <Link to={href} {...rest} className={commonClasses}>
        {children}
        {variant === ButtonVariant.next && getIcon()}
      </Link>
    );
  }
  return (
    <button {...rest} className={commonClasses}>
      {children}
      {variant === ButtonVariant.next && getIcon()}
    </button>
  );
};

export { Button, ButtonVariant };
