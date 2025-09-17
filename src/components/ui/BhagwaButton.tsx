"use client";

import { ReactNode } from "react";

interface BhagwaButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function BhagwaButton({ children, onClick, className = "" }: BhagwaButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2
        px-6 py-3 rounded font-semibold text-white
        bg-gradient-to-r from-[#ff7c20] to-[#ffa147]
        shadow-[0_4px_15px_rgba(255,126,95,0.4)]
        hover:scale-105 hover:shadow-[0_6px_20px_rgba(255,126,95,0.6)]
        active:scale-95 transition-all duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
}
