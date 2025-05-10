'use client';

import PostCard from '@/app/(board)/boards/_components/PostCard';

type Post = {
  title: string;
  date: string;
  username: string;
  likes: number;
  image?: string;
};

type PostListProps = {
  posts: Post[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (option: string) => void;
};

export default function PostList({
  posts,
  isOpen,
  onToggle,
  onSelect,
}: PostListProps) {
  return (
    <section className="grid h-full w-full grid-cols-2 gap-5">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          date={post.date}
          username={post.username}
          likes={post.likes}
          image={post.image}
          isOpen={isOpen}
          onToggle={onToggle}
          onSelect={onSelect}
        />
      ))}
    </section>
  );
}
