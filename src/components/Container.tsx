import classNames from 'classnames';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={classNames('container mx-auto px-4 py-16 max-w-screen-2xl', className)}>{children}</div>;
};

export { Container };
