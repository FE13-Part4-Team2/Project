import React, { useState } from 'react';
import BaseInput from '@/components/common/Input/InputBase';
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordMatch,
} from '@/utils/inputValidation';
import IconRenderer from '@/components/common/Icons/IconRenderer';

interface InputSignupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  invalidMessage?: string;
  pattern?: 'name' | 'email' | 'password' | 'passwordMatch';
  onValueChange: (value: string) => void;
  originalPassword?: string;
}

const InputSignup = ({
  label,
  value,
  pattern,
  invalidMessage = '올바른 값을 입력해주세요',
  onValueChange,
  originalPassword,
  ...props
}: InputSignupProps) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onValueChange(val);

    if (pattern === 'name') {
      setIsInvalid(!validateName(val));
    }

    if (pattern === 'email') {
      setIsInvalid(!validateEmail(val));
    }

    if (pattern === 'password') {
      setIsInvalid(!validatePassword(val));
    }

    if (pattern === 'passwordMatch') {
      setIsInvalid(!validatePasswordMatch(originalPassword ?? '', val));
    }
  };

  return (
    <div>
      <BaseInput
        {...props}
        label={label}
        labelClassName="text-lg-medium"
        value={value}
        type={
          pattern === 'password' || pattern === 'passwordMatch'
            ? showPassword
              ? 'text'
              : 'password'
            : (props.type ?? 'text')
        }
        // 암호화 아이콘
        rightIcon={
          pattern === 'password' || pattern === 'passwordMatch' ? (
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="absolute top-1/2 right-3 -translate-y-1/2"
            >
              {showPassword ? (
                <IconRenderer name="VisbilityOnIcon" />
              ) : (
                <IconRenderer name="VisbilityOffIcon" />
              )}
            </button>
          ) : undefined
        }
        onChange={handleChange}
        isInvalid={isInvalid}
        containerClassName="relative h-[48px] bg-slate-800"
        inputClassName="placeholder:text-slate-500 pr-6"
      />
      {isInvalid && (
        <p className="text-danger text-md-medium mt-2">{invalidMessage}</p>
      )}
    </div>
  );
};

export default InputSignup;
