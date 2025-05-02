import { TaskResponse } from '@/lib/apis/task/type';
import TaskMenuButton from '@/components/common/task/TaskMenuButton';
import WriterInfo from '@/components/common/user/WriterInfo';
import DateInfo from '@/components/common/task/DateInfo';
import FrequencyInfo from '@/components/common/task/FrequencyInfo';

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
          <TaskMenuButton size="md" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {writer && <WriterInfo {...writer} />}
            <div className="flex items-center gap-2.5">
              <DateInfo date={date} />
              <FrequencyInfo frequency={frequency} />
            </div>
          </div>
          <div className="text-md-regular">{description}</div>
        </div>
      </div>
    </div>
  );
}
