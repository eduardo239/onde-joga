import React from "react";

interface CircleImageProps {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl" | number;
  borderColor?: string;
  borderWidth?: number;
  className?: string;
}

const CircleImage: React.FC<CircleImageProps> = ({
  src,
  alt = "",
  size = "sm",
  borderColor = "gray-200",
  borderWidth = 2,
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
    xl: "h-40 w-40",
  };

  const sizeValue =
    typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : {};

  return (
    <div
      className={`
        rounded-full p-3 overflow-hidden
        ${typeof size === "string" ? sizeClasses[size] : ""}
        border-${borderWidth} border-${borderColor}
        ${className}
      `}
      style={sizeValue}
    >
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CircleImage;
