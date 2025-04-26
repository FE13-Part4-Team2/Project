import { InputBase } from '@/components/common/Input';

export default function UpdatePasswordModal() {
  return (
    <div className="flex flex-col gap-4">
      <InputBase
        label="새 비밀번호"
        placeholder="새 비밀번호를 입력해주세요."
      />
      <InputBase
        label="새 비밀번호 확인"
        placeholder="새 비밀번호를 다시 한 번 입력해주세요."
      />
    </div>
  );
}
