export default function Button({
  color,
}: // children,
{
  color: string;
  children: string;
}) {
  const colors: { [key: string]: string } = {
    black: "bg-black text-white",
    white: "bg-white text-black",
  };

  return (
    <button
      className={`${colors[color]} border border-gray-300 w-full px-2 py-2 font-sans text-sm/6 font-medium`}
    >
      Click me
    </button>
  );
}
