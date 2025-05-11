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
  const taskListsData = groupData?.taskLists ?? [];
  const matchedTaskList = taskListsData.find(
    (list) => list.id === Number(searchParams.taskListId)
  );

  const taskListData = await getTaskListById({
    taskListId: Number(searchParams.taskListId),
    date: searchParams.date,
  });

  console.log('taskListId:', searchParams.taskListId);
  console.log('date:', searchParams.date);

  if (!groupData || !matchedTaskList) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col items-center gap-6 p-6">
      <TeamBanner group={groupData} userId={Number(userId)} />
      <TaskListBar taskList={matchedTaskList} />
    </div>
  );
}
