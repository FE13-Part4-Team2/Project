// 기본 인풋

import React from 'react';
import { InputBaseStyle } from '@/components/common/Input/style';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isInvalid?: boolean;
  customClassName?: string;
}

const InputBase = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ leftIcon, rightIcon, isInvalid, customClassName = '', ...props }, ref) => {
    return (
      <div className={`${InputBaseStyle(isInvalid)} ${customClassName}`}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        <input
          ref={ref}
          {...props}
          className="text-lg-regular flex-1 bg-transparent placeholder-slate-500 outline-none"
        />
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </div>
    );
  }
);

export default InputBase;
