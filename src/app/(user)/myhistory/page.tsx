import { cookies } from 'next/headers';
import { getUserHistory } from '@/lib/apis/user';
import { groupByDate } from '@/utils/groupByDate';
import MyHistorySection from './_components/MyHistorySection';
import { TaskResponse } from '@/lib/apis/task/type';

export default async function MyHistoryPage() {
  const userId = cookies().get('userId')?.value;
  if (!userId)
    return <div className="p-6 text-white">로그인이 필요합니다.</div>;

  const res = await getUserHistory({ tag: ['user-history'] });
  if (!res || !res.tasksDone)
    return <div className="p-6 text-white">아직 히스토리가 없습니다.</div>;

  const grouped = groupByDate(res.tasksDone);
  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <>
      <main className="laptop:py-10 tablet:p-6 relative min-h-[calc(100vh-60px)] px-4 py-6">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="text-xl-bold mb-6 text-white">마이 히스토리</h1>
          <div className="flex flex-col gap-10">
            {sortedDates.map((isoDate) => {
              const { display, items } = grouped[isoDate];
              return (
                <section key={isoDate} className="flex flex-col gap-4">
                  <h2 className="text-lg-bold text-white">{display}</h2>
                  <MyHistorySection items={items} />
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
