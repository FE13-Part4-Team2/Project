'use client';
import ReportCard from '@/app/(team)/team/_components/ReportBanner/ReportCard';
import { useIsMobile } from '@/hooks/useCheckViewport';
import {
  reportBannerContainerStyle,
  reportBannerItemWrapperStyle,
  progressPercentStyle,
  reportCardsWrapperStyle,
} from '@/app/(team)/team/_components/ReportBanner/styles';

interface ReportBannerProps {
  groupId: number;
}

const ReportBanner = () => {
  const isMobile = useIsMobile();

  return (
    <div className={`${reportBannerContainerStyle}`}>
      {/* 아이템 래퍼 */}
      <div className={`${reportBannerItemWrapperStyle}`}>
        {/* 진행률 래퍼 */}
        <div className="flex items-center justify-center gap-10">
          {/* 임시 원형 아이콘 */}
          <div className="relative h-[140px] w-[140px] rounded-full border-[30px] border-green-700" />
          {/* 진행률 텍스트 */}
          <div className="tablet:relative absolute flex flex-col gap-1">
            <p className="tablet:block text-md-medium hidden">
              오늘의
              <br />
              진행 상황
            </p>
            <p className="tablet:hidden text-md-medium block">오늘</p>
            <p className={`${progressPercentStyle}`}>25%</p>
          </div>
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
