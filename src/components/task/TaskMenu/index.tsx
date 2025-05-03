'use client';

import DropDown from '@/components/common/Dropdown';
import TaskMenuButton from '@/components/task/TaskMenu/TaskMenuButton';

export default function TaskMenu({ size }: { size: 'sm' | 'md' }) {
  return (
    <DropDown>
      <DropDown.Trigger className="p-0">
        <TaskMenuButton size={size} />
      </DropDown.Trigger>
      <DropDown.Menu align="right">
        <DropDown.Item onClick={() => console.log('수정하기')}>
          수정하기
        </DropDown.Item>
        <DropDown.Item onClick={() => console.log('삭제하기')}>
          삭제하기
        </DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  );
}
