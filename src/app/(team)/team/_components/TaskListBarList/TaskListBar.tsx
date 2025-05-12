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
        <div className="flex items-center justify-center gap-3">
          <div
            className={`${colorChipStyle}`}
            style={{ backgroundColor: color }}
          />
          <GradientScrollable>
            <p className={`${taskListBarTitleStyle}`}>{name}</p>
          </GradientScrollable>
        </div>
        <ProcessBadge />
      </div>
    </div>
  );
};

export default TaskListBar;
