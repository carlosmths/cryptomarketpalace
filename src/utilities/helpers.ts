export const handleParentFocus = (
  e: React.FocusEvent<HTMLInputElement | HTMLDivElement, Element>
) => {
  const parentClasses = e.target.parentElement?.classList;
  parentClasses?.toggle('focusable-input');
};
