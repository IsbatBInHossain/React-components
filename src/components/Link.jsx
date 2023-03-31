import classNames from "classnames";
import useNavigationContext from "../hooks/useNavigationContext";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigationContext();
  const classes = classNames(
    "text-blue-500",
    className,
    to === currentPath && activeClassName
  );
  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
};
export default Link;
