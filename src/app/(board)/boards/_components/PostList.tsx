'use client';
import { useState } from 'react';
import PostCard from '@/app/(board)/boards/_components/PostCard';
import { Post } from '@/utils/postMapper';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@/store/useModalStore';
import { deleteArticle } from '@/lib/apis/article';
import { ROUTES } from '@/constants/routes';
import { toast } from 'react-toastify';
import { getArticleById } from '@/lib/apis/article';
import { getUser } from '@/lib/apis/user';

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const router = useRouter();
  const { openModal, closeModal } = useModalStore();

  const handleSelect = async (id: number, option: string) => {
    setOpenDropdownId(null);

    if (option === '수정하기') {
      try {
        // 게시글 정보를 가져와서 작성자 확인
        const article = await getArticleById({ articleId: id });
        if (!article) {
          toast.error('게시글을 찾을 수 없습니다.');
          return;
        }

        // 현재 로그인한 사용자 정보 가져오기
        const currentUser = await getUser({});

        if (!currentUser) {
          toast.error('로그인이 필요합니다.');
          return;
        }

        if (article.writer?.id !== currentUser.id) {
          toast.error('작성자만 수정할 수 있습니다.');
          return;
        }

        // 작성자인 경우에만 수정 페이지로 이동
        router.push(ROUTES.ARTICLE_EDIT(id));
      } catch (error) {
        if (error instanceof Error) {
          const statusMatch = error.message.match(/Error (\d+):/);
          const status = statusMatch ? parseInt(statusMatch[1], 10) : 0;
          if (status === 401) {
            toast.error('로그인이 필요합니다.');
          } else {
            toast.error('게시글 수정 권한을 확인할 수 없습니다.');
          }
        }
      }
      return;
    }

    if (option === '삭제하기') {
      openModal({
        variant: 'danger',
        title: '게시글 삭제를 진행하시겠어요?',
        description: '삭제 후 복구가 불가능합니다.',
        button: {
          number: 2,
          text: '삭제',
          onRequest: async () => {
            try {
              await deleteArticle({ articleId: id });
              closeModal();
              window.location.reload();
            } catch (error: unknown) {
              if (error instanceof Error) {
                const statusMatch = error.message.match(/Error (\d+):/);
                const status = statusMatch ? parseInt(statusMatch[1], 10) : 0;
                if (status === 403) {
                  toast.error('작성자만 삭제할 수 있습니다.');
                  closeModal();
                } else {
                  toast.error(error.message || '삭제에 실패했습니다.');
                }
              } else {
                toast.error('삭제에 실패했습니다.');
              }
            }
          },
        },
      });
    }
  };

  return (
    <section className="grid h-full w-full grid-cols-2 gap-5">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.date}
          nickname={post.nickname}
          likes={post.likes}
          image={post.image}
          writerImage={post.writerImage}
          isOpen={openDropdownId === post.id}
          onToggle={() => handleToggle(post.id)}
          onSelect={(option) => handleSelect(post.id, option)}
        />
      ))}
    </section>
  );
}
