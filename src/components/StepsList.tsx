import { v4 as uuidv4 } from 'uuid';

interface Steps {
  title: string;
  text: string;
}

interface StepsListProps {
  steps: Array<Steps>;
}

const StepsList: React.FC<StepsListProps> = ({ steps }) => {
  return (
    <>
      {steps.map(({ title, text }, index) => (
        <div
          className="step-container flex [&:not(:last-child)]:pb-12 gap-x-6 relative after:content-[''] last:after:content-none after:w-0.5
           after:bg-zinc-900 after:absolute after:top-10 after:h-[calc(100%-3rem)] after:left-4"
          key={uuidv4()}>
          <div className="step-number flex justify-center items-center w-8 h-8 rounded-full bg-zinc-900 text-white font-bold">
            {index + 1}
          </div>
          <div className="step-description flex-1">
            <h6 className="step-title mb-2">{title}</h6>
            <p className="step-text mb-0">{text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export { StepsList };
