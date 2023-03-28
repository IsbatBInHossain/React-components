import className from "classnames";

const Button = ({
  children,
  rounded,
  outline,
  primary,
  secondary,
  success,
  warning,
  danger,
  ...rest
}) => {
  const classes = className(
    rest.className,
    "px-3 py-1.5 border flex items-center",
    {
      "bg-blue-500 text-white border-blue-500": primary && !outline,
      "bg-gray-900 text-white border-gray-900": secondary && !outline,
      "bg-green-600 text-white border-green-600": success && !outline,
      "bg-yellow-400 text-white border-yellow-400": warning && !outline,
      "bg-red-500 text-white border-red-500": danger && !outline,
      "rounded-full": rounded,
      "bg-white text-blue-500 border-blue-500": primary && outline,
      "bg-white text-gray-900 border-gray-900": secondary && outline,
      "bg-white text-green-500 border-green-500": success && outline,
      "bg-white text-yellow-400 border-yellow-400": warning && outline,
      "bg-white text-red-500 border-red-500": danger && outline,
    }
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
