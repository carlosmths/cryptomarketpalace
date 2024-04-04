import classNames from 'classnames';
import React from 'react';

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
        'simple-accordion border border-solid rounded-lg p-3',
        className
      )}
    >
      <div className="cursor-pointer" onClick={handleClick}>
        {headline}
      </div>
      <div className={classNames(isOpen ? 'block' : 'hidden')}>
        <hr className="my-4" />
        {content}
      </div>
    </div>
  );
};

export { SimpleAccordion };
