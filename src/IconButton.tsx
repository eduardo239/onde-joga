import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost" | "danger";
  shape?: "circle" | "square";
  disabled?: boolean;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  size = "md",
  variant = "primary",
  shape = "square",
  disabled = false,
  className = "",
}) => {
  const sizeClasses = {
    sm: "p-1.5 text-sm",
    md: "p-2 text-base",
    lg: "p-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500",
    ghost: "bg-transparent text-gray-500 hover:bg-gray-100 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-lg",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${shapeClasses[shape]}
        focus:outline-none focus:ring-2 focus:ring-offset-2
        transition-all duration-200
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {icon}
    </button>
  );
};

export default IconButton;
