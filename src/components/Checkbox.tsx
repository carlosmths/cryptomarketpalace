import React from 'react';

interface CheckboxProps {
  label?: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !checked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };
  return (
    <div className="flex">
      <input
        type="checkbox"
        className="appearance-none relative w-4 h-4 border border-purple-600 bg-white mt-1 shrink-0 mr-2 rounded 
        checked:bg-purple-600 checked:border-0 checked:after:content-['\2713'] after:absolute after:h-full after:w-full 
          after:text-center after:text-white after:font-bold after:align-baseline after:text-xs after:leading-normal"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label && <label>{label}</label>}
    </div>
  );
};

export { Checkbox };
