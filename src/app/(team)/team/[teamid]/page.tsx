import { cookies } from 'next/headers';
import { getGroupById } from '@/lib/apis/group';
import { getTaskListById } from '@/lib/apis/taskList';
import { notFound } from 'next/navigation';
import TeamBanner from '@/app/(team)/team/_components/TeamBanner';
import TaskListBar from '@/app/(team)/team/_components/TaskListBarList/TaskListBar';

export default async function TeamPage({
  params,
}: {
  params: { teamid: string };
}) {
  const userId = cookies().get('userId')?.value;
  const groupId = Number(params.teamid);
  const groupData = await getGroupById({ groupId });
  const taskListsData = groupData?.taskLists ?? [];

  if (!groupData) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col items-center gap-6 p-6">
      <TeamBanner group={groupData} userId={Number(userId)} />
      <TaskListBar />
    </div>
  );
}
