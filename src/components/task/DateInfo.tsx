import { formatDate } from '@/utils/formatDate';
import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function DateInfo({ date }: { date: string }) {
  const formattedDate = formatDate(date);

  return (
    <div className="flex items-center gap-1.5">
      <IconRenderer name="CalendarIcon" size={16} />
      <div className="text-xs-regular text-slate-500">{formattedDate}</div>
    </div>
  );
}
