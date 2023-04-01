import Table from "../components/Table";

const TablePage = () => {
  const fruits = [
    { name: "Mango", color: "bg-green-500", score: 6 },
    { name: "Orange", color: "bg-orange-500", score: 7 },
    { name: "Apple", color: "bg-red-500", score: 9 },
    { name: "Banana", color: "bg-yellow-500", score: 8 },
  ];

  const config = [
    { label: "Fruits", render: (fruit) => fruit.name },
    {
      label: "color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    { label: "score", render: (fruit) => fruit.score },
  ];

  const keyFn = (fruit) => fruit.name;

  return (
    <div>
      <Table data={fruits} config={config} keyFn={keyFn} />
    </div>
  );
};
export default TablePage;
