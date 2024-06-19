import React from "react";

import { PokemonType } from "../../types";

interface BadgeProps {
  type: PokemonType;
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ type, children, className }) => {
  let bgColorClass = "";
  let textColorClass = "";

  switch (type) {
    case "water":
      bgColorClass = "bg-blue-500";
      textColorClass = "text-white";
      break;
    case "ghost":
      bgColorClass = "bg-gray-500";
      textColorClass = "text-white";
      break;
    case "grass":
      bgColorClass = "bg-green-500";
      textColorClass = "text-white";
      break;
    case "fire":
      bgColorClass = "bg-red-500";
      textColorClass = "text-white";
      break;
    case "electric":
      bgColorClass = "bg-yellow-500";
      textColorClass = "text-black";
      break;
    default:
      bgColorClass = "bg-gray-500";
      textColorClass = "text-white";
  }

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${bgColorClass} ${textColorClass} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
