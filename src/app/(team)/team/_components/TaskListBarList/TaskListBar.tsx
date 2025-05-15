'use client';
import GradientScrollable from '@/components/common/Scroll/GradientScrollable';
import ProcessBadge from '@/app/(team)/team/_components/TaskListBarList/ProcessBadge';
import TaskListMenu from '@/components/tasklist/TaskListMenu';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { GroupMemberResponse } from '@/lib/apis/group/type';
import {
  taskListBarWrapperStyle,
  taskListBarTitleStyle,
  colorChipStyle,
  colorList,
} from '@/app/(team)/team/_components/TaskListBarList/styles';

interface TaskListBarProps {
  id: number;
  name: string;
  index: number;
  groupId: number;
  userId: number;
  membersData: GroupMemberResponse[];
}

const TaskListBar = ({
  id,
  name,
  index,
  groupId,
  userId,
  membersData,
}: TaskListBarProps) => {
  const router = useRouter();
  const color = colorList[index % colorList.length];

  const handleClick = () => {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10);

    router.push(`${ROUTES.TASK(groupId)}?id=${id}&date=${formattedDate}`);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick();
      }}
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
          <TaskListMenu
            groupId={groupId}
            userId={userId}
            membersData={membersData}
            taskListId={id}
            taskListName={name}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskListBar;
