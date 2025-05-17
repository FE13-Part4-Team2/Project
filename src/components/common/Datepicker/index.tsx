'use client';

import DatePicker from 'react-datepicker';
import type { ComponentProps } from 'react';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import IconRenderer from '@/components/common/Icons/IconRenderer';

type BaseDatePickerProps = ComponentProps<typeof DatePicker>;

interface CustomDatePickerProps
  extends Omit<BaseDatePickerProps, 'selected' | 'onChange'> {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

export default function CustomDatePicker({
  selectedDate,
  setSelectedDate,
  ...rest
}: CustomDatePickerProps) {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={
        ((date: Date | [Date, Date] | null) => {
          if (!date || Array.isArray(date)) return;
          setSelectedDate(date);
        }) as (date: Date | [Date, Date] | null, event?: any) => void
      }
      locale={ko}
      inline
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return (
          <div className="text-md-medium flex items-center justify-between bg-slate-800 px-1 py-1 text-white">
            <button onClick={decreaseMonth}>
              <IconRenderer name="CalendarArrowIcon" flip />
            </button>
            <span>{`${year}년 ${month}월 ${day}일`}</span>
            <button onClick={increaseMonth}>
              <IconRenderer name="CalendarArrowIcon" />
            </button>
          </div>
        );
      }}
    />
  );
}
