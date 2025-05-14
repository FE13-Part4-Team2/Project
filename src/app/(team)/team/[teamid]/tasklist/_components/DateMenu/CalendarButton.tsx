import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import CustomDatePicker from '@/components/common/Datepicker';
import { useIsMobile } from '@/hooks/useCheckViewport';

export default function CalendarButton() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const currentDate = searchParams.get('date');

  const [selectedDate, setSelectedDate] = useState(new Date(currentDate!));
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  useEffect(() => {
    const newDateString = selectedDate.toISOString().slice(0, 10);
    const params = new URLSearchParams(searchParams);
    params.set('id', id!);
    params.set('date', newDateString);
    router.push(`?${params.toString()}`);
    setIsDatePickerOpen(false);
  }, [selectedDate]);

  return (
    <div className="relative">
      {!isMobile && (
        <button
          type="button"
          onClick={() => setIsDatePickerOpen((prev) => !prev)}
          className="flex size-6 items-center justify-center rounded-full bg-slate-800 transition-colors duration-100 hover:bg-slate-700"
        >
          <IconRenderer name="CalendarIcon" size={12} />
        </button>
      )}
      {isDatePickerOpen && (
        <div className="absolute top-7">
          <CustomDatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      )}
    </div>
  );
}
