// Auth 페이지에서 사용하는 input component
// 입력값 검증, 에러 메시지 및 비밀번호 보기 토글

'use client';
import React, { useState } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordMatch,
} from '@/utils/inputValidation';
import IconRenderer from '@/components/common/Icons/IconRenderer';

// 타입 프로퍼티 순서
// 1. 필수 > 옵션 순서
// 2. 입력값 (value) 와 핸들러 (onInputChange) 는 가까이 두기
// 3. 타입 확장은 맨 위 (extends)
interface InputAuthProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onInputChange: (value: string) => void;
  label?: string;
  inputType?: 'name' | 'email' | 'password' | 'passwordMatch';
  originalPassword?: string;
  invalidMessage?: string;
}

const InputAuth = ({
  value,
  onInputChange,
  label,
  inputType,
  originalPassword,
  invalidMessage,
  ...props
}: InputAuthProps) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // inputType 에 따라 입력값 유효성 검사 함수 실행
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value; // 이벤트가 발생한 인풋값
    onInputChange(inputValue); // 부모 컴포넌트가 핸들링 로직을 담당

    // 입력값 유효성 검사 : map 에 inputType 과 검증 함수들을 매핑
    const validatorMap = {
      name: validateName,
      email: validateEmail,
      password: validatePassword,
      passwordMatch: (inputValue: string) =>
        validatePasswordMatch(originalPassword ?? '', inputValue),
    } as const;

    if (!inputType) return; // type guard
    const validator = validatorMap[inputType];
    if (validator) {
      setIsInvalid(!validator(inputValue));
    }
  };

  return (
    <div>
      <InputBase
        {...props}
        label={label}
        value={value}
        onChange={handleInputChange}
        isInvalid={isInvalid}
        containerClassName="relative h-[48px] bg-slate-800"
        inputClassName="placeholder:text-slate-500"
        // 비밀번호만 암호화
        type={
          inputType === 'password' || inputType === 'passwordMatch'
            ? showPassword
              ? 'text'
              : 'password'
            : (props.type ?? 'text')
        }
        rightIcon={
          inputType === 'password' || inputType === 'passwordMatch' ? (
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="absolute top-1/2 right-3 -translate-y-1/2 outline-none"
            >
              {showPassword ? (
                <IconRenderer name="VisibilityOnIcon" />
              ) : (
                <IconRenderer name="VisibilityOffIcon" />
              )}
            </button>
          ) : undefined
        }
      />
      {isInvalid && (
        <p className="text-danger text-md-medium mt-2">{invalidMessage}</p>
      )}
    </div>
  );
};

export default InputAuth;
