import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Theme } from 'types/sharedTypes';

enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
}

type ButtonTypes = HTMLAnchorElement | HTMLButtonElement;
interface ButtonProps<T extends ButtonTypes>
  extends React.AnchorHTMLAttributes<T>,
    React.ButtonHTMLAttributes<T> {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  theme?: Theme;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps<HTMLAnchorElement | HTMLButtonElement>> = ({
  children,
  variant = ButtonVariant.primary,
  href,
  className,
  theme = Theme.light,
  ...rest
}) => {
  const commonClasses = classNames(
    'link-button flex justify-center items-center py-4 px-6 lg:py-2 lg:px-4 rounded-lg box-border',
    variant === ButtonVariant.primary
      ? {
          'bg-purple-600 text-white hover:bg-purple-800': theme === Theme.light,
          'bg-white text-purple-950 hover:bg-gray-200': theme === Theme.dark,
        }
      : [
          'border border-solid',
          {
            'border-purple-600 text-purple-600 hover:text-purple-800 hover:border-purple-800':
              theme === Theme.light,
            'border-white bg-transparent hover:border-gray-400 hover:text-gray-400':
              theme === Theme.dark,
          },
        ],
    className
  );

  if (href) {
    return (
      <Link to={href} {...rest} className={commonClasses}>
        {children}
      </Link>
    );
  }
  return (
    <button {...rest} className={commonClasses}>
      {children}
    </button>
  );
};

export { Button, ButtonVariant };
