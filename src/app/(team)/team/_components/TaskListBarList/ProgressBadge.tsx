import IconRenderer from '@/components/common/Icons/IconRenderer';
import {
  progressBadgeContainerStyle,
  progressBadgeTextStyle,
} from '@/app/(team)/team/_components/TaskListBarList/styles';

interface ProgressBadgeProps {
  total: number;
  done: number;
}

const ProgressBadge = ({ total, done }: ProgressBadgeProps) => {
  const isDone = total === done;

  return (
    <div className={`${progressBadgeContainerStyle}`}>
      {isDone ? (
        <IconRenderer name="DoneIcon" size={14} />
      ) : (
        <IconRenderer name="ArrowIcon" size={14} />
      )}
      <p className={`${progressBadgeTextStyle}`}>
        {done}/{total}
      </p>
    </div>
  );
};

export default ProgressBadge;
