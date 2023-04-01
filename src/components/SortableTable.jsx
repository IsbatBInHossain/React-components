import { useState } from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if (label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return (
        <div className="text-xl">
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    }
    if (sortOrder === "asc") {
      return (
        <div className="text-xl">
          <GoArrowSmallUp />
        </div>
      );
    } else {
      return (
        <div className="text-xl">
          <GoArrowSmallDown />
        </div>
      );
    }
  };

  const updatedConfig = config.map((column) => {
    if (column.sortValue) {
      column.header = () => (
        <th
          onClick={() => handleClick(column.label)}
          className="cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      );
      return column;
    }
    return column;
  });

  let sortedData = data;

  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};
export default SortableTable;
