import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accodion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderedItems = items.map(({ id, label, content }, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={id}>
        <h3
          onClick={() => handleClick(index)}
          className="cursor-pointer flex items-center p-3 border-b bg-gray-50 justify-between"
        >
          {label}
          <span className="text-xlss">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
          </span>
        </h3>
        {isExpanded && <div className="border-b p-5">{content}</div>}
      </div>
    );
  });

  return <div className="border-t border-x rounded">{renderedItems}</div>;
};
export default Accodion;
