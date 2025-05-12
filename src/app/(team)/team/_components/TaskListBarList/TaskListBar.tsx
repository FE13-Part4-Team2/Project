'use client';
import ProcessBadge from '@/app/(team)/team/_components/TaskListBarList/ProcessBadge';
import TaskMenuButton from '@/components/task/TaskMenu/TaskMenuButton';
import GradientScrollable from '@/components/common/Scroll/GradientScrollable';
import { useRouter } from 'next/navigation';
import {
  taskListBarWrapperStyle,
  taskListBarTitleStyle,
  colorChipStyle,
  colorList,
} from '@/app/(team)/team/_components/styles';

interface TaskListBarProps {
  id: number;
  name: string;
  index: number;
  groupId: number;
}

const TaskListBar = ({ id, name, index, groupId }: TaskListBarProps) => {
  const router = useRouter();
  const color = colorList[index % colorList.length];

  const handleClick = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    router.push(`/team/${groupId}/tasklist?id=${id}&date=${formattedDate}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex w-full cursor-pointer flex-col items-center justify-between"
    >
      <div className={`${taskListBarWrapperStyle}`}>
        <div
          className={`${taskListBarTitleStyle} flex items-center justify-start gap-3`}
        >
          <div
            className={`${colorChipStyle} shrink-0`}
            style={{ backgroundColor: color }}
          />
          <div className={`${taskListBarTitleStyle} pr-2`}>
            <GradientScrollable color="#1e293b">{name}</GradientScrollable>
          </div>
        </div>

        <div className="flex items-center gap-1 pr-2">
          <ProcessBadge />
          <TaskMenuButton size="sm" />
        </div>
      </div>
    </div>
  );
};

export default TaskListBar;
