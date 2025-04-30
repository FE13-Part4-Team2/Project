import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function PrevDayButton() {
  return (
    <button
      type="button"
      className="flex size-4 items-center justify-center rounded-full bg-slate-800 transition-colors duration-100 hover:bg-slate-700"
    >
      <IconRenderer name="ArrowIcon" size={12} />
    </button>
  );
}
