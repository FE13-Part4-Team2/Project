import Image from 'next/image';

export default function SocialLogin() {
  return (
    <div className="flex items-center justify-between">
      <span>간편 로그인하기</span>
      <button>
        <Image src="/icon/kakao_icon.svg" alt="kakao" width={42} height={42} />
      </button>
    </div>
  );
}
