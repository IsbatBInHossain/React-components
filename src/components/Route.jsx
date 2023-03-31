import useNavigationContext from "../hooks/useNavigationContext";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigationContext();
  if (path === currentPath) return children;
  return null;
};
export default Route;
