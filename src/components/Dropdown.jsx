import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  useEffect(() => {
    const handle = (event) => {
      if (!divEl) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handle, true);
    return document.removeEventListener("click", handle);
  }, []);
  const handleClick = () => setIsOpen((current) => !current);
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className=" hover:bg-sky-100 p-1 cursor-pointer rounded"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Selected..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};
export default Dropdown;
