'use client';

import IconRenderer from '@/components/common/Icons/IconRenderer';
import DropDown from '@/components/common/Dropdown';

type EditDropdownProps = {
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (option: string) => void;
};

export default function EditDropdown({
  isOpen,
  onToggle,
  onSelect,
}: EditDropdownProps) {
  return (
    <DropDown>
      <DropDown.Trigger onClick={onToggle} isOpen={isOpen}>
        <IconRenderer name="ThreeDotsIcon" size={24} />
      </DropDown.Trigger>
      <DropDown.Menu isOpen={isOpen} align="right" className="top-7">
        <DropDown.Item onClick={() => onSelect('수정하기')}>
          수정하기
        </DropDown.Item>
        <DropDown.Item onClick={() => onSelect('삭제하기')}>
          삭제하기
        </DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  );
}
