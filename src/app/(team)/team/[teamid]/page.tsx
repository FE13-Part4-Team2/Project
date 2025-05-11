import { cookies } from 'next/headers';
import { getGroupById } from '@/lib/apis/group';
import { getTaskListById } from '@/lib/apis/taskList';
import { notFound } from 'next/navigation';
import TeamBanner from '@/app/(team)/team/_components/TeamBanner';
import TaskListBar from '@/app/(team)/team/_components/TaskListBarList/TaskListBar';

export default async function TeamPage({
  params,
  searchParams,
}: {
  params: { teamid: string };
  searchParams: { taskListId: string; date: string };
}) {
  const userId = cookies().get('userId')?.value;
  const groupId = Number(params.teamid);

  const groupData = await getGroupById({ groupId });
  const taskListData = await getTaskListById({
    taskListId: Number(searchParams.taskListId),
    date: searchParams.date,
    tag: ['task'],
  });

  if (!groupData || !taskListData) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col items-center gap-6 p-6">
      <TeamBanner group={groupData} userId={Number(userId)} />
      <TaskListBar taskList={taskListData} />
    </div>
  );
}
