import React from "react";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  color?: string;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  color,
  type = "button",
}) => (
  <button
    onClick={onClick}
    type={type}
    className={`px-4 py-2 rounded-lg transition text-white ${color} ${
      className || ""
    }`}
  >
    {children}
  </button>
);

export default Button;
