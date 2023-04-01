const Table = ({ data, config, keyFn }) => {
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

  const renderedHead = config.map((column) => {
    const capitaized =
      column.label.charAt(0).toUpperCase() + column.label.slice(1);
    return (
      <th key={column.label} className="p-3">
        {capitaized}
      </th>
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
