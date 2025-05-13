'use client';
import BestPostCard from '@/app/(board)/boards/_components/BestPostCard';
import { Post } from '@/utils/postMapper';

type BestPostListProps = {
  posts: Post[];
};

export default function BestPostList({ posts }: BestPostListProps) {
  return (
    <>
      <h3 className="text-xl-bold mb-14 text-slate-50">베스트 게시글</h3>
      <section className="mb-10 flex h-55 w-full items-center gap-5">
        {posts.map((post) => (
          <BestPostCard
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            nickname={post.nickname}
            likes={post.likes}
            image={post.image}
            writerImage={post.writerImage}
          />
        ))}
      </section>
    </>
  );
}
