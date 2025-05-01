import TaskDetailPage from '@/app/(team)/team/[teamid]/task/[taskid]/page';
import CloseButton from '@/app/(team)/team/[teamid]/tasklist/@sidePage/(..)task/[taskid]/_components/CloseButton';
import ExpansionButton from '@/app/(team)/team/[teamid]/tasklist/@sidePage/(..)task/[taskid]/_components/ExpansionButton';

interface PageProps {
  params: { teamid: string; taskid: string };
}

export default function Page(props: PageProps) {
  return (
    <div className="relative">
      <div className="tablet:top-10 tablet:left-10 absolute top-6 left-6 flex gap-4">
        <CloseButton />
        <ExpansionButton />
      </div>
      <TaskDetailPage {...props} />
    </div>
  );
}
