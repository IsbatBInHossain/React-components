import SortableTable from "../components/SortableTable";

const TablePage = () => {
  const fruits = [
    { name: "Orange", color: "bg-orange-500", score: 7 },
    { name: "Mango", color: "bg-green-500", score: 6 },
    { name: "Apple", color: "bg-red-500", score: 9 },
    { name: "Banana", color: "bg-yellow-500", score: 8 },
  ];

  const config = [
    {
      label: "Fruits",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => fruit.name;

  return (
    <div>
      <SortableTable data={fruits} config={config} keyFn={keyFn} />
    </div>
  );
};
export default TablePage;
