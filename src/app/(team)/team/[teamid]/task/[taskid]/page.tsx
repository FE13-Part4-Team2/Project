import LoginButton from '@/app/(team)/team/[teamid]/task/[taskid]/_components/LoginButton';
import LogoutButton from '@/app/(team)/team/[teamid]/task/[taskid]/_components/LogoutButton';
import ModalButton from '@/app/(team)/team/[teamid]/task/[taskid]/_components/ModalButton';

interface PageProps {
  params: { teamid: string; taskid: string };
}

export default function TaskDetailPage({ params }: PageProps) {
  const groupId = Number(params.teamid);
  const taskId = Number(params.taskid);

  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <div>{`${groupId}/${taskId}`}</div>
        <LoginButton />
        <LogoutButton />
        <ModalButton />
      </div>
    </div>
  );
}
