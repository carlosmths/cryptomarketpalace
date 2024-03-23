import { ReactComponent as Plus } from 'assets/plus.svg';
import { ReactComponent as Minus } from 'assets/minus.svg';
import React from 'react';
import classNames from 'classnames';

interface AccordionDataType {
  question: string;
  answer: string;
}

interface AccordionProps {
  faqs: AccordionDataType[];
}

const Accordion: React.FC<AccordionProps> = ({ faqs }) => {
  const [openMenu, setOpenMenu] = React.useState<Number>(-1);

  const clickHandler = (index: Number) => {
    setOpenMenu(index === openMenu ? -1 : index);
  };

  return (
    <div className="faq-list flex flex-col gap-y-4">
      {faqs.map((faq, index) => (
        <div
          key={`faq-${index}`}
          className={classNames(
            'faq-container cursor-pointer border border-solid rounded-xl hover:bg-sky-100 p-4',
            openMenu === index && 'bg-sky-100'
          )}
          onClick={() => clickHandler(index)}
        >
          <div className="headline flex items-center font-semibold">
            <div className="mr-2">{index + 1}</div>
            <div className="flex-1">{faq.question}</div>
            <div className="w-6">
              {openMenu !== index ? <Plus /> : <Minus />}
            </div>
          </div>
          <div
            className={classNames(
              'mt-4',
              openMenu !== index ? 'hidden' : 'block'
            )}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Accordion };
