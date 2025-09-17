// components/OutlineBhagwaButton.tsx
"use client";
import React from 'react';

interface OutlineBhagwaButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon?: React.ReactNode;
}

const OutlineBhagwaButton: React.FC<OutlineBhagwaButtonProps> = ({
  children,
  onClick,
  className = "",
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2
        px-6 py-3 rounded font-semibold
        border-2 border-white  // White border
        text-white             // CHANGED: Default text is now white
        bg-transparent
        
        // Effects
        hover:bg-gradient-to-r from-[#ff7c20] to-[#ffa147]
        hover:border-[#ff7c20] // Good practice to change border color on hover too
        hover:scale-105
        active:scale-95
        transition-all duration-300

        ${className}
      `}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default OutlineBhagwaButton;