import CalendarButton from '@/app/(team)/team/[teamid]/tasklist/_components/DateMenu/CalendarButton';
import NextDayButton from '@/app/(team)/team/[teamid]/tasklist/_components/DateMenu/NextDayButton';
import PrevDayButton from '@/app/(team)/team/[teamid]/tasklist/_components/DateMenu/PrevDayButton';

export default function DateMenu() {
  return (
    <div className="flex items-center gap-3">
      <div className="text-lg-medium">5월 18일 (월)</div>
      <div className="flex gap-1">
        <PrevDayButton />
        <NextDayButton />
      </div>
      <CalendarButton />
    </div>
  );
}
