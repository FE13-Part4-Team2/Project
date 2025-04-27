import clsx from 'clsx';
import Image from 'next/image';

const boxGradientStyle = clsx(
  'relative p-[1px]',
  'laptop:h-[421px] laptop:w-[998px]',
  'tablet:h-[356px] tablet:w-[698px]',
  'h-[469px] w-[345px]',
  'bg-gradient-to-r from-green-700 to-[#CEF57E]',
  'rounded-[40px] shadow-custom backdrop-blur-[12px]'
);

const boxStyle = clsx(
  'tablet:flex-row-reverse tablet:items-stretch tablet:justify-center',
  'flex flex-col items-center justify-end',
  'laptop:h-[419px] laptop:w-[996px]',
  'tablet:h-[354px] tablet:w-[696px]',
  'h-[467px] w-[343px]',
  'rounded-[40px]'
);

const imageSize = clsx(
  'relative',
  'tablet:h-[268.5px] tablet:w-[232px]',
  'laptop:h-[338px] laptop:w-[291px]',
  'h-[273px] w-[235px]'
);

const textStyle = clsx('laptop:text-2xl-medium text-2lg-medium');

const LandingMiddleSection = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-20">
      {/* BOX 1 */}
      <div className={boxGradientStyle}>
        <div className={clsx(`${boxStyle} bg-slate-900`)}>
          {/* 전체 아이템 컨테이너 */}
          <div className="tablet:flex tablet:flex-row-reverse tablet:gap-25 laptop:gap-50">
            {/* 아이콘 & 텍스트 컨테이너 */}
            <div
              className={clsx(
                'tablet:justify-center flex flex-col',
                'tablet:mb-0 mb-10 gap-[16px]'
              )}
            >
              <Image
                src="/image/landing_icon_folder.png"
                alt="폴더 아이콘"
                width={48}
                height={48}
              />
              <h1 className={textStyle}>
                그룹으로
                <br />할 일을 관리해요
              </h1>
            </div>
            {/* 이미지 컨테이너 */}
            <div className="tablet:items-end flex">
              <div className={imageSize}>
                <Image
                  src="/image/landing_mockup_team.png"
                  alt="팀 페이지 이미지"
                  fill
                  className="absolute object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOX 2 */}
      <div
        className={clsx(`${boxStyle} border border-slate-50/10 bg-slate-800`)}
      >
        {/* 전체 아이템 컨테이너 */}
        <div className="tablet:flex tablet:gap-25 laptop:gap-50">
          {/* 아이콘 & 텍스트 컨테이너 */}
          <div
            className={clsx(
              'tablet:justify-center flex flex-col',
              'tablet:mb-0 mb-10 gap-[16px]'
            )}
          >
            <Image
              src="/image/landing_icon_message.png"
              alt="메시지 아이콘"
              width={48}
              height={48}
            />
            <h1 className={textStyle}>
              간단하게 멤버들을
              <br />
              초대해요
            </h1>
          </div>
          {/* 이미지 컨테이너 */}
          <div className="tablet:items-end flex">
            <div className={imageSize}>
              <Image
                src="/image/landing_mockup_invitation.png"
                alt="멤버 초대하기 이미지"
                fill
                className="absolute object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOX 3 */}
      <div className={clsx(`${boxStyle} bg-slate-950`)}>
        {/* 전체 아이템 컨테이너 */}
        <div className="tablet:flex tablet:flex-row-reverse tablet:gap-25 laptop:gap-50">
          {/* 아이콘 & 텍스트 컨테이너 */}
          <div
            className={clsx(
              'tablet:justify-center flex flex-col',
              'tablet:mb-0 mb-10 gap-[16px]'
            )}
          >
            <Image
              src="/image/landing_icon_check.png"
              alt="체크 아이콘"
              width={48}
              height={48}
            />
            <h1 className={textStyle}>
              할 일도 간편하게
              <br />
              체크해요
            </h1>
          </div>
          {/* 이미지 컨테이너 */}
          <div className="tablet:items-end flex">
            <div className={imageSize}>
              <Image
                src="/image/landing_mockup_reply.png"
                alt="댓글 이미지"
                fill
                className="absolute object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMiddleSection;
