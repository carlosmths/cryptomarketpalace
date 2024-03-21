import classNames from 'classnames';
import { Container } from 'components/Container';

interface TwoColumnContainerProps {
  leftCol: React.ReactNode;
  rightCol: React.ReactNode;
  className?: string;
}

const TwoColumnContainer: React.FC<TwoColumnContainerProps> = ({
  leftCol,
  rightCol,
  className,
}) => {
  return (
    <Container
      className={classNames('flex flex-col gap-x-24 lg:flex-row', className)}
    >
      <div className="left-content flex flex-col justify-center lg:w-6/12">
        {leftCol}
      </div>
      <div className="right-content flex flex-col justify-center lg:w-6/12">
        {rightCol}
      </div>
    </Container>
  );
};

export { TwoColumnContainer };
