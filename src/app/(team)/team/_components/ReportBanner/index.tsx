import ReportCard from '@/app/(team)/team/_components/ReportBanner/ReportCard';
import { reportBannerContainerStyle } from '@/app/(team)/team/_components/ReportBanner/styles';

const ReportBanner = () => {
  return (
    <div
      className={`${reportBannerContainerStyle} flex items-center justify-center`}
    >
      {/* 아이템 래퍼 */}
      <div className="flex h-full w-full items-center justify-between p-6">
        {/* 진행률 */}
        <div className="flex items-center justify-center gap-6">
          <div className="h-[140px] w-[140px] rounded-full bg-green-700" />
          <p>
            오늘의
            <br />
            진행 상황
          </p>
        </div>
        {/* Todo & Done Card */}
        <div className="flex flex-col gap-4">
          <ReportCard />
          <ReportCard />
        </div>
      </div>
    </div>
  );
};
export default ReportBanner;
