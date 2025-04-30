'use client';

export default function InputWithLabel() {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="이메일을 입력해주세요"
        className="w-full"
      />
    </div>
  );
}
