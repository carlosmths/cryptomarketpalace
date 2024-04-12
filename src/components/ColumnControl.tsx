import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

interface ColumnControlProps {
  columns: React.ReactNode[][];
  centerContent?: boolean;
  className?: string;
}

const ColumnControl: React.FC<ColumnControlProps> = ({ columns, centerContent, className }) => {
  return (
    <div className={classNames('flex flex-col gap-y-8', className)}>
      {columns.map((column) => (
        <div
          key={uuidv4()}
          className={classNames(
            'flex flex-col lg:gap-x-8 xl:gap-x-24 gap-y-8 lg:flex-row',
            centerContent && 'items-center'
          )}>
          {column.map((element) => (
            <div key={uuidv4()} className="flex flex-col flex-1">
              {element}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export { ColumnControl };
