interface RecurringSectionProps {
  frequencyType: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
  weekDays: number[];
  monthDay: number | null;
  setFrequencyType: (
    frequencyType: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY'
  ) => void;
  setWeekDays: (weekDays: number[]) => void;
  setMonthDay: (monthDay: number | null) => void;
}

export default function RecurringSection({
  frequencyType,
  weekDays,
  monthDay,
  setFrequencyType,
  setWeekDays,
  setMonthDay,
}: RecurringSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg-medium">반복 설정</div>
    </div>
  );
}
