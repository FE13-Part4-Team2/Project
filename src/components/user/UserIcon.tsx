import IconRenderer from '@/components/common/Icons/IconRenderer';
import Image from 'next/image';
import clsx from 'clsx';

interface UserIconProps {
  image: string | null;
  sizeClass?: string; // 아이콘 외부 원형 크기
  size?: string; // 이미지 예상 크기
  iconClass?: string;
}

export default function UserIcon({
  image,
  sizeClass = 'size-8',
  size = '32px',
  iconClass = 'size-6',
}: UserIconProps) {
  return (
    <div
      className={clsx(
        'relative flex shrink-0 items-center justify-center overflow-hidden',
        'rounded-full border border-slate-50/10 bg-slate-700',
        sizeClass
      )}
    >
      {image ? (
        <Image
          src={image}
          alt="유저 프로필 이미지"
          sizes={size}
          fill
          className="object-cover"
        />
      ) : (
        <IconRenderer name="MemberIcon" className={iconClass} />
      )}
    </div>
  );
}
