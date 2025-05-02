import { TaskResponse } from '@/lib/apis/task/type';
import TaskMenuButton from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskDetailSection/TaskMenuButton';
import WriterInfo from '@/components/common/user/WriterInfo';
import DateInfo from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskDetailSection/DateInfo';
import FrequencyInfo from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskDetailSection/FrequencyInfo';

export default function TaskDetailSection({
  id,
  date,
  doneAt,
  name,
  description,
  frequency,
  writer,
}: TaskResponse) {
  return (
    <div className="tablet:min-h-[312px] min-h-[242px]">
      <div className="tablet:gap-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2lg-bold tablet:text-xl-bold">{name}</h1>
          <TaskMenuButton />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {writer && <WriterInfo {...writer} />}
            <div className="flex gap-2.5">
              <DateInfo />
              <FrequencyInfo />
            </div>
          </div>
          <div className="text-md-regular">{description}</div>
        </div>
      </div>
    </div>
  );
}
