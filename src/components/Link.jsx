import { useContext } from "react";
import NavigationContext from "../context/navigation";
import Panel from "./Panel";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };
  return (
    <Panel>
      <a href={to} onClick={handleClick} className="flex-row justify-center">
        {children}
      </a>
    </Panel>
  );
};
export default Link;
