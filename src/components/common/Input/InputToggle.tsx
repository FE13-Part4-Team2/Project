// 할 일 생성 모달(할 일 주기 선택),
// 자유게시판(정렬 선택) 사용 인풋
'use client';

import React, { useState } from 'react';
import BaseInput from '@/components/common/Input/InputBase';
import IconRenderer from '@/components/common/Icons/IconRenderer';

interface InputToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'pale' | 'deep';
  options: string[];
  onOptionSelect: (value: string) => void;
}

const InputToggle = ({
  variant,
  options,
  onOptionSelect,
  ...props
}: InputToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <BaseInput
        {...props}
        containerClassName={`relative h-[48px]
          ${variant === 'pale' ? 'bg-slate-700' : 'bg-slate-800'} `}
        rightIcon={
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="absolute top-1/2 right-3 -translate-y-1/2 outline-none"
          >
            <IconRenderer name="ToggleIcon" />
          </button>
        }
      />
      {/* 임시 드롭다운 메뉴 */}
      {isOpen && (
        <ul className="absolute top-full z-10 mt-1 w-full rounded-[12px] bg-slate-700">
          {options.map((option) => (
            <li key={option}>
              <button
                onClick={() => {
                  onOptionSelect(option);
                  setIsOpen(false);
                }}
                className="cursor-pointer px-4 py-2 text-sm hover:bg-slate-600"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputToggle;
