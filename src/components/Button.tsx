interface ButtonProps {
  children: string;
  color: string;
  icon?: React.ReactNode;
}

export default function Button({ children, color, icon }: ButtonProps) {
  const colors: { [key: string]: string } = {
    black: "bg-black text-white border-gray-800",
    white: "bg-white text-black border-gray-200",
  };

  return (
    <button
      className={`${colors[color]} border-3 w-full px-2 py-2 font-sans text-sm/6 font-medium flex items-center justify-center gap-2`}
    >
      {icon ? icon : null}
      {children}
    </button>
  );
}
