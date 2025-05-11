'use client';
import ProcessBadge from '@/app/(team)/team/_components/TaskListBarList/ProcessBadge';
import GradientScrollable from '@/components/common/Scroll/GradientScrollable';
import { TaskListResponse } from '@/lib/apis/taskList/type';
import {
  taskListBarWrapperStyle,
  taskListBarTitleStyle,
} from '@/app/(team)/team/_components/styles';

const TaskListBar = ({ taskList }: { taskList: TaskListResponse }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className={`${taskListBarWrapperStyle}`}>
        <GradientScrollable>
          <p className={`${taskListBarTitleStyle}`}>{taskList.name}</p>
        </GradientScrollable>
        <ProcessBadge />
      </div>
    </div>
  );
};

export default TaskListBar;
