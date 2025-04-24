interface User {
  id: number;
  nickname: string;
  image: string | null;
}

export interface TaskBody {
  name: string;
  description: string;
  startDate: string;
  frequencyType: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
  weekDays: number[];
  monthDay: number | null;
}

export interface TaskResponse {
  id: number;
  name: string;
  description: string;
  date: string;
  doneAt: string | null;
  updatedAt: string;
  user: User | null;
  recurringId: number;
  deletedAt: string | null;
  displayIndex: number;
  writer: User;
  doneBy: {
    user: User | null;
  };
  commentCount: number;
  frequency: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
}
