import InputBase from '@/components/common/Input/InputBase';
import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function SearchInput() {
  return (
    <div className="mb-10">
      <InputBase
        containerClassName="sm:h-[56px] h-[48px] bg-slate-800"
        placeholder="검색어를 입력해 주세요"
        leftIcon={<IconRenderer name="SearchIcon" />}
      />
    </div>
  );
}
