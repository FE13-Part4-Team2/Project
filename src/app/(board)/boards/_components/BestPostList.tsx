'use client';

import BestPostCard from '@/app/(board)/boards/_components/BestPostCard';

type Post = {
  title: string;
  date: string;
  username: string;
  likes: number;
  image?: string;
};

type BestPostListProps = {
  posts: Post[];
};

export default function BestPostList({ posts }: BestPostListProps) {
  return (
    <>
      <h3 className="text-xl-bold mb-14 text-slate-50">베스트 게시글</h3>
      <section className="mb-10 flex h-55 w-full items-center gap-5">
        {posts.map((post, index) => (
          <BestPostCard
            key={index}
            title={post.title}
            date={post.date}
            username={post.username}
            likes={post.likes}
            image={post.image}
          />
        ))}
      </section>
    </>
  );
}
