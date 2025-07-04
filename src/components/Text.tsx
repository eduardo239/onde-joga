interface TextProps {
  children: string;
  className?: string;
  textLeft?: boolean;
  textTitle?: boolean;
  textWhite?: boolean;
}

export default function Text({
  children,
  className,
  textLeft,
  textTitle,
  textWhite,
}: TextProps) {
  return (
    <p
      className={`${className} ${textWhite ? "text-white" : "text-gray-800"} ${
        textLeft ? "text-left" : "text-center"
      } ${textTitle ? "text-2xl font-bold" : ""}`}
    >
      {children}
    </p>
  );
}
