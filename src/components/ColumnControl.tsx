import classNames from 'classnames';
import { Container } from 'components/Container';
import { v4 as uuidv4 } from 'uuid';

interface ColumnControlProps {
  columns: React.ReactNode[];
  centerContent?: boolean;
  className?: string;
}

const ColumnControl: React.FC<ColumnControlProps> = ({ columns, centerContent, className }) => {
  return (
    <Container className={classNames('flex flex-col gap-x-24 gap-y-8 lg:flex-row', className)}>
      {columns.map((column) => (
        <div
          key={uuidv4()}
          className={classNames('left-content flex flex-col flex-1', centerContent && 'justify-center')}>
          {column}
        </div>
      ))}
    </Container>
  );
};

export { ColumnControl };
