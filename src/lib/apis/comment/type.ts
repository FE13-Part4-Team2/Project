import { UserResponse } from '@/lib/apis/user/type';

export interface CommentBody {
  content: string;
}

export interface CommentResponse {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: UserResponse;
}
