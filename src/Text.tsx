interface TextProps {
  children: string;
}

export default function Text({ children }: TextProps) {
  return (
    <p className={`font-sans text-lg text-gray-700 text-center`}>{children}</p>
  );
}
