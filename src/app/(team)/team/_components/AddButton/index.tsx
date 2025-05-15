'use client';
import CreateTaskListModal from '@/components/common/Modal/content/CreateTaskListModal';
import InviteMemberModal from '@/components/common/Modal/content/InviteMemberModal';
import { useModalStore } from '@/store/useModalStore';
import { TaskListBody } from '@/lib/apis/taskList/type';
import { handleCreateTaskList } from '@/components/tasklist/TaskListMenu/actions/taskListActions';

interface AddButtonProps {
  variant: 'task-list' | 'member';
  groupId: number;
}

const AddButton = ({ variant, groupId }: AddButtonProps) => {
  const { openModal } = useModalStore();

  const openCreateTaskListModal = () => {
    openModal(
      {
        variant: 'taskForm',
        title: '할 일 목록 추가하기',
        button: {
          number: 1,
          text: '만들기',
          onRequest: (body) =>
            handleCreateTaskList(groupId, body as TaskListBody),
        },
      },
      <CreateTaskListModal />
    );
  };

  const openInviteMemberModal = () => {
    openModal(
      {
        title: '멤버 초대하기',
        button: {
          number: 1,
          text: '초대 링크 생성',
          onRequest: (body) =>
            handleCreateTaskList(groupId, body as TaskListBody),
        },
      },
      <InviteMemberModal />
    );
  };

  return (
    <button
      onClick={
        variant === 'task-list'
          ? openCreateTaskListModal
          : openInviteMemberModal
      }
      className="text-md-regular text-green-700"
    >
      {variant === 'task-list'
        ? '+ 새로운 목록 추가하기'
        : '+ 새로운 멤버 초대하기'}
    </button>
  );
};

export default AddButton;
