interface DoubleLineDividerProps {
  text?: string;
  lineColor?: string;
  textColor?: string;
  className?: string;
}

export default function Divider({
  text = "",
  lineColor = "gray-300",
  textColor = "gray-500",
  className = "",
}: DoubleLineDividerProps) {
  return (
    <div className={`relative flex items-center ${className} w-full`}>
      <div className={`flex-grow border-t border-${lineColor} `}></div>
      {text && (
        <span className={`flex-shrink mx-4 text-sm text-${textColor}`}>
          {text}
        </span>
      )}
      <div className={`flex-grow border-t border-${lineColor} `}></div>
    </div>
  );
}
