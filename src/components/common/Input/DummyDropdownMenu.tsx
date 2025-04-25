'use client';

import React from 'react';

interface DropdownMenuProps {
  options: string[];
  onSelect: (value: string) => void;
  className?: string;
}

const DropdownMenu = ({
  options,
  onSelect,
  className = '',
}: DropdownMenuProps) => {
  return (
    <ul
      className={`absolute top-full z-10 mt-1 w-full rounded-[12px] bg-slate-700 shadow-md ${className}`}
    >
      {options.map((option) => (
        <li key={option}>
          <button
            type="button"
            onClick={() => onSelect(option)}
            className="text-md-regular w-full px-4 py-3 text-left hover:bg-slate-600"
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
