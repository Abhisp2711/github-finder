export default function Badge({
  text,
  children,
  variant = "default",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-1.5 text-xs font-semibold border";

  const variantStyles = {
    default: "bg-blue-100 text-blue-800 border-transparent",
    secondary: "bg-gray-100 text-gray-800 border-transparent",
    outline: "text-black border border-gray-300",
    success: "bg-green-100 text-green-800 border-green-200",
    error: "bg-red-100 text-red-800 border-red-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
      {text}
    </span>
  );
}
