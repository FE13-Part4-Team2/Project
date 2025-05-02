import { TaskResponse } from '@/lib/apis/task/type';
import { formatDate } from '@/utils/formatDate';
import TitleButton from '@/app/(team)/team/[teamid]/tasklist/_components/TaskListSection/TaskCard/TitleButton';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import TaskMenuButton from '@/components/common/task/TaskMenuButton';
import FrequencyInfo from '@/components/common/task/FrequencyInfo';

export default function TaskCard({
  id,
  date,
  doneAt,
  name,
  frequency,
  commentCount,
}: TaskResponse) {
  const formattedDate = formatDate(date);

  return (
    <div className="flex flex-col gap-2.5 rounded-lg bg-slate-800 px-[14px] py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {doneAt ? (
              <IconRenderer name="CheckboxActiveIcon" />
            ) : (
              <IconRenderer name="CheckboxDefaultIcon" />
            )}
            <TitleButton name={name} id={id} doneAt={doneAt} />
          </div>
          <div className="flex items-center gap-0.5">
            <IconRenderer name="CommentIcon" size={16} />
            <div className="text-xs-regular text-slate-500">{commentCount}</div>
          </div>
        </div>
        <TaskMenuButton size="sm" />
      </div>
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-1.5">
          <IconRenderer name="CalendarIcon" size={16} />
          <div className="text-xs-regular text-slate-500">{formattedDate}</div>
        </div>
        <FrequencyInfo frequency={frequency} />
      </div>
    </div>
  );
}
