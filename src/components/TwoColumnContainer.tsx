import classNames from 'classnames';
import { Container } from 'components/Container';

interface TwoColumnContainerProps {
  leftCol: React.ReactNode;
  rightCol: React.ReactNode;
  centerContent?: boolean;
  className?: string;
}

const TwoColumnContainer: React.FC<TwoColumnContainerProps> = ({
  leftCol,
  rightCol,
  centerContent,
  className,
}) => {
  return (
    <Container
      className={classNames(
        'flex flex-col gap-x-24 gap-y-8 lg:flex-row',
        className
      )}
    >
      <div
        className={classNames('left-content flex flex-col lg:w-6/12', {
          'justify-center': centerContent,
        })}
      >
        {leftCol}
      </div>
      <div
        className={classNames('right-content flex flex-col lg:w-6/12', {
          'justify-center': centerContent,
        })}
      >
        {rightCol}
      </div>
    </Container>
  );
};

export { TwoColumnContainer };
