import Image from 'next/image';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';

const ProfileIcon = ({ userImage }: { userImage: string | null }) => {
  return (
    <div
      className={clsx(
        'relative flex shrink-0 items-center justify-center overflow-hidden',
        'tablet:size-8 size-6',
        'rounded-full bg-slate-600',
        'border border-slate-50/10'
      )}
    >
      {userImage ? (
        <Image
          src={userImage}
          alt="유저 프로필 이미지"
          fill
          sizes="(min-width: 744px) 32px, 24px"
          className="object-cover"
        />
      ) : (
        <IconRenderer name="MemberIcon" className="tablet:size-6 size-4.5" />
      )}
    </div>
  );
};

export default ProfileIcon;
