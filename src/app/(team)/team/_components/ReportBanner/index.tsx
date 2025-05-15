'use client';
import ReportCard from '@/app/(team)/team/_components/ReportBanner/ReportCard';
import { useIsMobile } from '@/hooks/useCheckViewport';
import {
  reportBannerContainerStyle,
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
      <div className="tablet:p-8 flex w-full items-center justify-between p-3">
        {/* 진행률 */}
        <div className="flex items-center justify-center gap-10">
          {/* 임시 원형 아이콘 */}
          <div className="relative h-[140px] w-[140px] rounded-full border-[30px] border-green-700" />

          <div className="tablet:relative absolute">
            {isMobile ? (
              '오늘'
            ) : (
              <>
                오늘의
                <br />
                진행 상황
              </>
            )}
            <p
              className="tablet:text-[40px] text-[20px] font-bold"
              style={{ backgroundImage: 'var(--green-gradient)' }}
            >
              25%
            </p>
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
