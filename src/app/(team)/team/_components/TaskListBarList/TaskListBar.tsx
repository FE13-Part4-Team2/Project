'use client';
import ProcessBadge from '@/app/(team)/team/_components/TaskListBarList/ProcessBadge';
import GradientScrollable from '@/components/common/Scroll/GradientScrollable';
import {
  taskListBarWrapperStyle,
  taskListBarTitleStyle,
  colorChipStyle,
  colorList,
} from '@/app/(team)/team/_components/styles';

const TaskListBar = ({ name, index }: { name: string; index: number }) => {
  const color = colorList[index % colorList.length];

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className={`${taskListBarWrapperStyle}`}>
        <div
          className={`${taskListBarTitleStyle} relative flex w-full items-center justify-start gap-3`}
        >
          <div
            className={`${colorChipStyle} shrink-0`}
            style={{ backgroundColor: color }}
          />
          <GradientScrollable color="#1e293b">
            <p className={`${taskListBarTitleStyle}`}>{name}</p>
          </GradientScrollable>
        </div>
        <ProcessBadge />
      </div>
    </div>
  );
};

export default TaskListBar;
