import { reportCardContainerStyle } from '@/app/(team)/team/_components/ReportBanner/styles';

interface ReportCardProps {
  variant: 'todo' | 'done';
}

const ReportCard = ({ variant }: ReportCardProps) => {
  return (
    <div className={`${reportCardContainerStyle}`}>
      <h3 className="text-xs-medium text-slate-300">
        {variant === 'todo' ? '오늘의 할 일' : '한 일'}
      </h3>
    </div>
  );
};

export default ReportCard;
