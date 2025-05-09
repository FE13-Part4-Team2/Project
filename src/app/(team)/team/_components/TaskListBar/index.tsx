import ProcessTag from '@/app/(team)/team/_components/TaskListBar/ProcessBadge';
import { taskListBarWrapperStyle } from '@/app/(team)/team/_components/styles';

const TaskListBar = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className={`${taskListBarWrapperStyle}`}>
        목록 이름 30자 제한이라서 500에러 발생하는 듯하다 <ProcessTag />
      </div>
    </div>
  );
};

export default TaskListBar;
