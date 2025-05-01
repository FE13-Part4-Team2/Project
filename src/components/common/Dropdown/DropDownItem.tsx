'use client';

import { ReactNode } from 'react';

interface DropDownItemProps {
  children: ReactNode;
  onClick?: () => void;
}

const DropDownItem = ({ children, onClick }: DropDownItemProps) => (
  <button
    className="text-md-regular box-border w-full rounded-xl bg-slate-800 px-2 py-3 text-center text-slate-50 hover:bg-slate-700 active:scale-95 active:bg-slate-900"
    onClick={onClick}
  >
    {children}
  </button>
);

export default DropDownItem;
