import { getUser } from '@/lib/apis/user';
import { getUserHistory } from '@/lib/apis/user';
import MyHistorySection from './_components/MyHistorySection';
import { TaskResponse } from '@/lib/apis/task/type';

export default async function MyHistoryPage() {
  const user = await getUser({ tag: ['my-history'] });

  const userId = user?.id;
  const teamId = user?.teamId;

  console.log('[MyHistoryPage] userId:', userId);
  console.log('[MyHistoryPage] teamId:', teamId);

  if (!userId || !teamId) {
    return <div className="p-6 text-white">로그인이 필요합니다.</div>;
  }

  const res = await getUserHistory({ tag: ['user-history'] });

  if (!res || !res.tasksDone) {
    return <div className="p-6 text-white">히스토리가 없습니다.</div>;
  }

  const historyData: TaskResponse[] = res.tasksDone;

  return (
    <main className="mx-auto max-w-[1200px] p-6">
      <h1 className="text-xl-bold mb-6 text-white">마이 히스토리</h1>
      <MyHistorySection items={historyData} />
    </main>
  );
}
