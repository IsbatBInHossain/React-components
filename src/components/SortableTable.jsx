import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/useSort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortBy, sortOrder, handleClick, sortedData } = useSort(data, config);

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

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};
export default SortableTable;
