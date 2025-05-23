'use client';
import TaskListBar from '@/app/(team)/team/_components/TaskListBarList/TaskListBar';
import Pagination from '@/app/(team)/team/_components/TaskListBarList/Pagination';
import { useState, useEffect } from 'react';
import { TaskListResponse } from '@/lib/apis/taskList/type';
import { GroupMemberResponse } from '@/lib/apis/group/type';
import { calculateProgress } from '@/utils/calculateProgress';
import { listContainerStyle } from '@/app/(team)/team/_components/TaskListBarList/styles';

const PER_PAGE = 4;

interface TaskListBarListProps {
  items: TaskListResponse[];
  groupId: number;
  userId: number;
  membersData: GroupMemberResponse[];
}

const TaskListBarList = ({
  items,
  groupId,
  userId,
  membersData,
}: TaskListBarListProps) => {
  const [page, setPage] = useState(1);

  const totalPage = Math.ceil(items.length / PER_PAGE);
  const startIndex = (page - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const currentItems = items.slice(startIndex, endIndex);

  // 할 일 목록 개수 변경 시 페이지 즉시 반영
  useEffect(() => {
    const newTotalPage = Math.ceil(items.length / PER_PAGE);
    if (page > newTotalPage) {
      setPage(newTotalPage);
    }
  }, [items.length, PER_PAGE]);

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPage) setPage((prev) => prev + 1);
  };

  return (
    <div className={`${listContainerStyle}`}>
      <div className="flex w-full flex-col gap-4">
        {currentItems.map((item, index) => {
          const { total, done, progress } = calculateProgress(item.tasks ?? []);

          return (
            <TaskListBar
              key={item.id}
              {...item}
              id={item.id}
              name={item.name}
              index={index + startIndex}
              groupId={groupId}
              userId={userId}
              membersData={membersData}
              total={total}
              done={done}
              progress={progress}
            />
          );
        })}
      </div>

      {totalPage > 1 && (
        <Pagination
          page={page}
          totalPage={totalPage}
          onPrev={handlePrev}
          onNext={handleNext}
          className="mt-2"
        />
      )}
    </div>
  );
};

export default TaskListBarList;
