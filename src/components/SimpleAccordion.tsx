import classNames from 'classnames';
import React from 'react';
import ArrowDown from 'assets/arrow-down.svg?react';

interface SimpleAccordionProps {
  headline: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

const SimpleAccordion: React.FC<SimpleAccordionProps> = ({
  headline,
  content,
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={classNames(
        'simple-accordion border border-solid rounded-lg p-3 hover:outline hover:outline-1 hover:outline-slate-950',
        className
      )}
    >
      <div
        className="cursor-pointer flex items-center justify-between"
        onClick={handleClick}
      >
        {headline}
        <ArrowDown
          className={classNames('w-3 h-full', isOpen && 'rotate-180')}
        />
      </div>
      <div className={classNames(isOpen ? 'block' : 'hidden')}>
        <hr className="my-4" />
        {content}
      </div>
    </div>
  );
};

export { SimpleAccordion };
