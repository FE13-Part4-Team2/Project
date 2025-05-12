import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

export default function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => date && setSelectedDate(date)}
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
    </div>
  );
}
