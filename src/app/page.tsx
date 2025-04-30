import InputBase from '@/components/common/Input/InputBase';
import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <InputBase
        id="test"
        title="테스트"
        titleClassName="mb-[12px] text-lg-medium"
        placeholder="검색어를 입력해 주세요"
        containerClassName="bg-slate-800"
        inputClassName="placeholder:text-slate-500"
        leftIcon={<IconRenderer name="SearchIcon" />}
        leftIconClassName="mr-2"
      />
    </div>
  );
}
