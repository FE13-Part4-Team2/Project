import TaskListBar from '@/app/(team)/team/_components/TaskListBarList/TaskListBar';
import { TaskListResponse } from '@/lib/apis/taskList/type';
import { listContainerStyle } from '@/app/(team)/team/_components/styles';

const TaskListBarList = ({ items }: { items: TaskListResponse[] }) => {
  return (
    <div className={`${listContainerStyle}`}>
      {items.map((item) => (
        <TaskListBar key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TaskListBarList;
