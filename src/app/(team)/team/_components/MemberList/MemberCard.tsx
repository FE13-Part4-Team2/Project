import TaskMenuButton from '@/components/task/TaskMenu/TaskMenuButton';
import { GroupResponse } from '@/lib/apis/group/type';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import { memberCardContainerStyle } from '@/app/(team)/team/_components/styles';

interface MemberCardProps {
  group: GroupResponse;
  name: string;
  email: string;
  userId: number;
}

const MemberCard = ({ group, name, email, userId }: MemberCardProps) => {
  const isAdmin = useIsAdmin({ membersData: group.members, userId });

  return (
    <div className={`${memberCardContainerStyle}`}>
      <div className="tablet:h-[33px] tablet:w-[146px] flex items-center gap-2">
        {/* 아이콘 */}
        <div className="tablet:h-[32px] tablet:w-[32px] h-[24px] w-[24px] shrink-0 rounded-full bg-slate-600" />

        {/* 이름 + 이메일 */}
        <div className="tablet:h-[33px] tablet:w-[102px] flex flex-col justify-center gap-1">
          <p className="text-md-regular">{name}</p>
          <p className="text-xs-regular break-all text-slate-300">{email}</p>
        </div>
      </div>

      {isAdmin && <TaskMenuButton size="sm" />}
    </div>
  );
};

export default MemberCard;
