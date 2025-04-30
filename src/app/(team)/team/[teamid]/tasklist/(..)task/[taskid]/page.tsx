import TaskDetailPage from '@/app/(team)/team/[teamid]/task/[taskid]/page';
import SidePage from '@/components/SidePage';

export default function Page(props: any) {
  return (
    <SidePage>
      <TaskDetailPage {...props} />
    </SidePage>
  );
}
