const LandingBottomSection = ({ className }: { className?: string }) => {
  return (
    <section className="flex w-full flex-col items-center text-center">
      <div className={`${className}`}>
        <h1 className="tablet:text-[40px] text-[24px] font-semibold">
          지금 바로 시작해 보세요
        </h1>
        <p className="tablet:text-[24px] text-[16px] font-medium">
          팀원 모두와 같은 방향, 같은 속도로 나아가는 가장 쉬운 방법
        </p>
      </div>
    </section>
  );
};

export default LandingBottomSection;
