import ReportCard from '@/app/(team)/team/_components/ReportBanner/ReportCard';
import {
  reportBannerContainerStyle,
  reportCardsWrapperStyle,
} from '@/app/(team)/team/_components/ReportBanner/styles';

interface ReportBannerProps {
  groupId: number;
}

const ReportBanner = () => {
  return (
    <div className={`${reportBannerContainerStyle}`}>
      {/* 아이템 래퍼 */}
      <div className="flex w-full items-center justify-between p-8">
        {/* 진행률 */}
        <div className="flex items-center justify-center gap-10">
          <div className="h-[140px] w-[140px] rounded-full border-[30px] border-green-700" />
          <p>
            오늘의
            <br />
            진행 상황
          </p>
        </div>
        {/* Todo & Done Card */}
        <div className={`${reportCardsWrapperStyle}`}>
          <ReportCard variant="todo" />
          <ReportCard variant="done" />
        </div>
      </div>
    </div>
  );
};
export default ReportBanner;
