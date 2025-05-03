'use client';

import InputWithLabelProps from '@/app/(auth)/login/type';
import Icons from '@/components/common/Icons';
import { validateEmail } from '@/utils/inputValidation';
import { useState } from 'react';

export default function InputWithLabel({
  inputType,
  ...props
}: InputWithLabelProps) {
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [isEyeToggleOpen, setIsEyeToggleOpen] = useState<boolean>(false);

  // 입력필드가 비어있는지 검사하는 함수
  const handleBlurChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    if (!inputValue) {
      setIsInputEmpty(true);
    } else {
      setIsInputEmpty(false);
    }
  };

  // 입력필드 유효성 검사
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    if (inputValue) {
      setIsInputEmpty(false);
    }

    if (inputType === 'email') {
      setIsInputValid(validateEmail(inputValue));
    }
  };

  const handleEyeToggleOpen = () => {
    setIsEyeToggleOpen((prev) => !prev);
  };

  // map inputType to korean label
  const inputTypeMap = {
    name: '이름',
    email: '이메일',
    password: '비밀번호',
    passwordConfirm: '비밀번호 확인',
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-lg-medium" htmlFor={inputType}>
        {inputTypeMap[inputType]}
      </label>

      {/*입력 필드*/}
      <div className="relative">
        <input
          type={
            inputType === 'password'
              ? isEyeToggleOpen
                ? 'text'
                : 'password'
              : inputType
          }
          id={inputType}
          name={inputType}
          required
          placeholder={`${inputTypeMap[inputType]}을 입력해주세요.`}
          className={`w-full rounded-xl bg-slate-800 p-4`}
          onChange={handleInputChange}
          onBlur={handleBlurChange}
          {...props}
        />

        {/*비밀번호 보임 표시*/}
        {inputType === 'password' && (
          <div className="absolute top-1/2 right-4 -translate-y-1/2">
            {isEyeToggleOpen ? (
              <Icons.VisibilityOnIcon
                size={24}
                onClick={handleEyeToggleOpen}
                className="cursor-pointer"
              />
            ) : (
              <Icons.VisibilityOffIcon
                size={24}
                onClick={handleEyeToggleOpen}
                className="cursor-pointer"
              />
            )}
          </div>
        )}
      </div>

      {isInputEmpty && (
        <div className="text-danger">
          {inputTypeMap[inputType] === '비밀번호'
            ? `${inputTypeMap[inputType]}를 입력해주세요.`
            : `${inputTypeMap[inputType]}을 입력해주세요.`}
        </div>
      )}
      {!isInputValid && (
        <div className="text-danger">이메일 형식으로 작성해주세요.</div>
      )}
    </div>
  );
}
