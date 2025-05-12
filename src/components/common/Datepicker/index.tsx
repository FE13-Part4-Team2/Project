import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function CustomDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => date && setStartDate(date)}
        locale={ko}
        inline
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => {
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          return (
            <div className="text-md-medium flex items-center justify-between bg-slate-800 py-1 text-white">
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
