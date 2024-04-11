import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

interface AutoScrollerProps {
  elements: React.ReactNode[];
  speed?: number;
  className?: string;
}

const AutoScroller: React.FC<AutoScrollerProps> = ({ elements, speed = 30000, className }) => {
  return (
    <div
      className={classNames('auto-scroller flex relative min-w-full overflow-hidden min-h-64 lg:min-h-56', className)}>
      <div className="flex absolute h-full">
        {[...Array(3)].map(() => (
          <div
            key={uuidv4()}
            className="flex flex-shrink-0 animate-swipe"
            style={{ '--speed': `${speed}ms` } as React.CSSProperties}>
            {elements.map((element) => element)}
          </div>
        ))}
      </div>
    </div>
  );
};

export { AutoScroller };
