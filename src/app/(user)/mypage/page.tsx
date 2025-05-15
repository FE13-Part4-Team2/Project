'use client';
import ProfileImageUploader from '@/app/(user)/mypage/_components/ProfileImageUploader';
import AccountInfoSection from '@/app/(user)/mypage/_components/AccountInfoSection';
import AccountUpdateButton from '@/app/(user)/mypage/_components/AccountUpdateButton';
import SecessionButton from '@/app/(user)/mypage/_components/SecessionButton';

export default function MyPage() {
  return (
    <div className="laptop:max-w-[792px] m-auto mt-10 flex flex-col justify-center px-6">
      <h2 className="text-xl-bold mb-6">계정 설정</h2>
      <ProfileImageUploader />
      <AccountInfoSection />
      <AccountUpdateButton />
      <SecessionButton />
    </div>
  );
}
