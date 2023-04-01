import { Fragment } from "react";
const Table = ({ data, config, keyFn }) => {
  const renderedHead = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return (
      <th key={column.label} className="p-3">
        {column.label}
      </th>
    );
  });

  const renderedBody = data.map((items) => {
    const renderedCells = config.map((columns) => {
      return (
        <td className="p-3" key={columns.label}>
          {columns.render(items)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={items.id || keyFn(items)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHead}</tr>
      </thead>
      <tbody>{renderedBody}</tbody>
    </table>
  );
};
export default Table;
