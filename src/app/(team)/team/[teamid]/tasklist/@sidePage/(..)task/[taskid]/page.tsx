import TaskDetailPage from '@/app/(team)/team/[teamid]/task/[taskid]/page';

interface PageProps {
  params: { teamid: string; taskid: string };
}

export default function Page(props: PageProps) {
  return (
    <div>
      <TaskDetailPage {...props} />
    </div>
  );
}
