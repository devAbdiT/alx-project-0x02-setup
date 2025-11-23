import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "medium",
  shape = "rounded-md",
  type = "button",
  disabled = false,
  className = "",
}) => {
  // Size classes
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Shape classes
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  const colorClasses = disabled
    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
    : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800";

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${shapeClasses[shape]}
    ${colorClasses}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;
