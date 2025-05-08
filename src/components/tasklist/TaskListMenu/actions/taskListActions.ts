import { deleteTaskListById } from '@/lib/apis/taskList';

export const handleDeleteTaskList = async (taskListId: number) => {
  try {
    await deleteTaskListById({
      taskListId,
      tag: ['tasklist'],
    });
  } catch (error) {
    console.log('Failed to delete the task list :', error);
  }
};
