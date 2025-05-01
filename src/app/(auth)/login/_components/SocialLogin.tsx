import Image from 'next/image';

export default function SocialLogin() {
  return (
    <div className="mt-12">
      {/* line */}
      <div className="mb-3 flex items-center gap-4">
        <div className="flex-1 border-t border-white/20" />
        <span>OR</span>
        <div className="flex-1 border-t border-white/20" />
      </div>

      {/*social login*/}
      <div className="flex items-center justify-between">
        <span className="leading-[19px] font-medium">간편 로그인하기</span>
        <button>
          <Image
            src="/icon/kakao_icon.svg"
            alt="kakao"
            width={42}
            height={42}
          />
        </button>
      </div>
    </div>
  );
}
