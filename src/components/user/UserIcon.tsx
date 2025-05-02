import IconRenderer from '@/components/common/Icons/IconRenderer';
import Image from 'next/image';

export default function UserIcon({ image }: { image: string | null }) {
  return (
    <>
      {image ? (
        <div className="relative size-8">
          <Image
            src={image}
            fill
            className="rounded-full border-1 border-slate-50/10"
            alt="user"
          />
        </div>
      ) : (
        <div className="flex size-8 items-center justify-center rounded-full border-1 border-slate-50/10 bg-slate-700">
          <IconRenderer name="MemberIcon" />
        </div>
      )}
    </>
  );
}
