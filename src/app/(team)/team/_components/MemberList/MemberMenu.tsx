import TaskMenuButton from '@/components/task/TaskMenu/TaskMenuButton';
import DropDown from '@/components/common/Dropdown';
import { useQueryClient } from '@tanstack/react-query';
import { useModalStore } from '@/store/useModalStore';
import { GroupMemberResponse } from '@/lib/apis/group/type';
import { deleteGroupMemberById } from '@/lib/apis/group';
import { toast } from 'react-toastify';

interface MemberMenuProps {
  groupId: number;
  members: GroupMemberResponse[];
  memberId: number;
  name: string;
}

const MemberMenu = ({ groupId, members, memberId, name }: MemberMenuProps) => {
  const { openModal } = useModalStore();

  const handleMemberDelete = async () => {
    try {
      await deleteGroupMemberById({ groupId, memberId });
      toast.success(`'${name}'님을 내보냈습니다.`);
    } catch (error) {
      console.log('멤버 삭제 실패', error);
      toast.error('멤버 내보내기에 실패했습니다.');
    }
  };

  const openMemberDeleteModal = () => {
    openModal({
      variant: 'danger',
      title: `'${name}' 님을 팀에서 내보내시겠어요?`,
      button: {
        number: 2,
        text: '확인',
        onRequest: handleMemberDelete,
      },
    });
  };

  return (
    <DropDown>
      <DropDown.Trigger className="mb-0">
        <TaskMenuButton size="sm" />
      </DropDown.Trigger>
      <DropDown.Menu align="right" className="mt-2 h-[40px] w-[120px]">
        <DropDown.Item
          onClick={openMemberDeleteModal}
          className="text-md-regular h-[38px] w-full"
        >
          내보내기
        </DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  );
};

export default MemberMenu;
