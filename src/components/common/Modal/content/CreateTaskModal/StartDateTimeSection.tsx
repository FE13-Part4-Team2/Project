import { formatDate } from '@/utils/formatDate';
import CustomDatePicker from '@/components/common/Datepicker';

interface StartDateTimeSectionProps {
  date: Date;
  setDate: (date: Date) => void;
}

export default function StartDateTimeSection({
  date,
  setDate,
}: StartDateTimeSectionProps) {
  const formattedDate = formatDate(date.toISOString());

  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg-medium">시작 날짜 및 시간</div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button
            type="button"
            className="text-lg-regular flex basis-3/5 items-center rounded-[12px] border border-slate-50/10 px-4 py-3.5 text-slate-500"
          >
            {formattedDate}
          </button>
          <button
            type="button"
            className="text-lg-regular flex basis-2/5 items-center rounded-[12px] border border-slate-50/10 px-4 py-3.5 text-slate-500"
          >
            오후 12:12
          </button>
        </div>
        <CustomDatePicker selectedDate={date} setSelectedDate={setDate} />
      </div>
    </div>
  );
}
