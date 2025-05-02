import { getTaskById } from '@/lib/apis/task';
import TaskCommentSection from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection';
import TaskDetailSection from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskDetailSection';

interface PageProps {
  params: { taskid: string };
}

export default async function TaskDetailPage({ params }: PageProps) {
  const taskId = Number(params.taskid);

  const TaskData = await getTaskById({ taskId });

  return (
    <div className="m-auto flex max-w-[1200px] flex-col">
      <div>{TaskData?.id}</div>
      <TaskDetailSection />
      <TaskCommentSection />
    </div>
  );
}
