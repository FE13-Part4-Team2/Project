import TaskDetailPage from '@/app/(team)/team/[teamid]/task/[taskid]/page';
import CloseButton from '@/app/(team)/team/[teamid]/tasklist/@sidePage/(..)task/[taskid]/_components/CloseButton';

interface PageProps {
  params: { teamid: string; taskid: string };
}

export default function Page(props: PageProps) {
  return (
    <div className="relative">
      <CloseButton />
      <TaskDetailPage {...props} />
    </div>
  );
}
