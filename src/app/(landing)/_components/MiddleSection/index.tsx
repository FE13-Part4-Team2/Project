import LandingBox from '@/app/(landing)/_components/MiddleSection/LandingBox';

const LandingMiddleSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className} flex w-full flex-col items-center gap-20`}
    >
      <LandingBox
        imageSrc="/image/landing_mockup_team.png"
        imageAlt="팀 페이지"
        iconSrc="/image/landing_icon_folder.png"
        iconAlt="폴더"
        textLines={['그룹으로', '일정을 관리해요']}
        tabletReverse
        gradient
        className="items-end bg-slate-900"
      />

      {/* BOX 2 */}
      <LandingBox
        imageSrc="/image/landing_mockup_invitation.png"
        imageAlt="멤버 초대"
        imageOnTop
        iconSrc="/image/landing_icon_message.png"
        iconAlt="메시지"
        textLines={['간단하게 멤버들을', '초대해요']}
        textLeft={false}
        mobileReverse
        className="items-start border border-slate-50/10 bg-slate-800"
      />

      {/* BOX 3 */}
      <LandingBox
        imageSrc="/image/landing_mockup_reply.png"
        imageAlt="댓글"
        imageOnTop
        tabletReverse
        mobileReverse
        iconSrc="/image/landing_icon_check.png"
        iconAlt="체크"
        textLines={['할 일도 간편하게', '체크해요']}
        className="items-start bg-slate-950"
      />
    </section>
  );
};

export default LandingMiddleSection;
