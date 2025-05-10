'use client';

import DropDown from '@/components/common/Dropdown';

type SortDropdownAreaProps = {
  isOpen: boolean;
  selectedOption: string | null;
  onToggle: () => void;
  onSelect: (option: string) => void;
};

export default function SortDropdownArea({
  isOpen,
  selectedOption,
  onToggle,
  onSelect,
}: SortDropdownAreaProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h3 className="text-xl-bold text-slate-50">게시글</h3>
      <DropDown>
        <DropDown.Trigger
          onClick={onToggle}
          isOpen={isOpen}
          showIcon
          className="h-11 w-[120px] bg-slate-700 px-4 py-2"
          placeholder="최신순"
        >
          {selectedOption}
        </DropDown.Trigger>
        <DropDown.Menu isOpen={isOpen} className="w-[120px]">
          <DropDown.Item onClick={() => onSelect('최신순')}>
            최신순
          </DropDown.Item>
          <DropDown.Item onClick={() => onSelect('좋아요순')}>
            좋아요 많은순
          </DropDown.Item>
        </DropDown.Menu>
      </DropDown>
    </div>
  );
}
