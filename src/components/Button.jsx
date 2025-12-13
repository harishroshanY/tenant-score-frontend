export default function Button({
  text,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const base =
    "px-4 py-2 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {text}
    </button>
  );
}
