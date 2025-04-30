'use client';

type InputWithErrorProps = {
  inputType: 'name' | 'email' | 'password' | 'passwordConfirm';
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputWithError({ inputType }: InputWithErrorProps) {
  // e 타입은 이벤트 객체 타입 <대상 요소>
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // 입력 필드 타입을 한글 라벨로 매핑
  const inputTypeMap = {
    name: '이름',
    email: '이메일',
    password: '비밀번호',
    passwordConfirm: '비밀번호 확인',
  };

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={inputType}>{inputTypeMap[inputType]}</label>
      <input
        type={inputType}
        id={inputType}
        name={inputType}
        required
        placeholder={`${inputTypeMap[inputType]}을 입력해주세요`}
        className="w-full rounded-xl bg-slate-800 p-4"
        onChange={handleInputChange}
      />
    </div>
  );
}
