import { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const [selected, setSelected] = useState(null);
  const handleSelected = (option) => setSelected(option);
  const options = [
    { label: "Audi", value: "audi" },
    { label: "Porsche", value: "porsche" },
    { label: "Lamborghini", value: "lamborghini" },
    { label: "Mazda", value: "mazda" },
    { label: "Ferrari", value: "ferrari" },
  ];
  return (
    <div className="flex">
      <Dropdown options={options} onChange={handleSelected} value={selected} />
    </div>
  );
};
export default DropdownPage;
