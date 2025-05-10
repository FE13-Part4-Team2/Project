'use client';
import { useState } from 'react';
import SearchArea from '@/app/(board)/boards/_components/SearchInput';
import BestPostList from '@/app/(board)/boards/_components/BestPostList';
import SortDropdownArea from '@/app/(board)/boards/_components/SortDropdown';
import PostList from '@/app/(board)/boards/_components/PostList';
import WriteButton from '@/app/(board)/boards/_components/WriteButton';

export default function BoardsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    handleClose();
  };

  const bestPosts = [
    {
      title:
        '게시글이 있습니다. 자유게시판에 글 올리고 싶어요? 여기 올릴 수 있는 다양한 방법이 있습니다. 저는 아로니구요 이건 더미 테스트용 글자입니다.',
      date: '2024.07.25',
      username: '유저 이름',
      likes: 999,
    },
    {
      title:
        '게시글이 있습니다. 자유게시판에 글 올리고 싶어요? 여기 올릴 수 있는 다양한 방법이 있습니다. 저는 아로니구요 이건 더미 테스트용 글자입니다.',
      date: '2024.07.25',
      username: '유저 이름',
      likes: 999,
    },
    {
      title:
        '게시글이 있습니다. 자유게시판에 글 올리고 싶어요? 여기 올릴 수 있는 다양한 방법이 있습니다. 저는 아로니구요 이건 더미 테스트용 글자입니다.',
      date: '2024.07.25',
      username: '유저 이름',
      likes: 999,
      image: '/placeholder.jpg',
    },
  ];

  const posts = [
    {
      title:
        '게시글이 있습니다. 자유게시판에 글 올리고 싶어요? 여기 올릴 수 있는 다양한 방법이 있습니다. 저는 아로니구요 이건 더미 테스트용 글자입니다. 저는 이아름이구요 오리를 정말 좋아합니다.',
      date: '2024.07.25',
      username: '유저 이름',
      likes: 999,
    },
    {
      title:
        '게시글이 있습니다. 자유게시판에 글 올리고 싶어요? 여기 올릴 수 있는 다양한 방법이 있습니다. 저는 아로니구요 이건 더미 테스트용 글자입니다. 저는 이아름이구요 오리를 정말 좋아합니다.',
      date: '2024.07.25',
      username: '유저 이름',
      likes: 999,
      image: '/placeholder.jpg',
    },
    {
      title:
        '게시글이 있습니다. 자유게시판에 글 올리고 싶어요? 여기 올릴 수 있는 다양한 방법이 있습니다. 저는 아로니구요 이건 더미 테스트용 글자입니다. 저는 이아름이구요 오리를 정말 좋아합니다.',
      date: '2024.07.25',
      username: '유저 이름',
      likes: 999,
    },
    {
      title:
        '게시글이 있습니다. 자유게시판에 글 올리고 싶어요? 여기 올릴 수 있는 다양한 방법이 있습니다. 저는 아로니구요 이건 더미 테스트용 글자입니다. 저는 이아름이구요 오리를 정말 좋아합니다.',
      date: '2024.07.25',
      username: '유저 이름',
      likes: 999,
      image: '/placeholder.jpg',
    },
    {
      title:
        '게시글이 있습니다. 자유게시판에 글 올리고 싶어요? 여기 올릴 수 있는 다양한 방법이 있습니다. 저는 아로니구요 이건 더미 테스트용 글자입니다. 저는 이아름이구요 오리를 정말 좋아합니다.',
      date: '2024.07.25',
      username: '유저 이름',
      likes: 999,
    },
    {
      title:
        '게시글이 있습니다. 자유게시판에 글 올리고 싶어요? 여기 올릴 수 있는 다양한 방법이 있습니다. 저는 아로니구요 이건 더미 테스트용 글자입니다. 저는 이아름이구요 오리를 정말 좋아합니다.',
      date: '2024.07.25',
      username: '유저 이름',
      likes: 999,
      image: '/placeholder.jpg',
    },
    {
      title:
        '게시글이 있습니다. 자유게시판에 글 올리고 싶어요? 여기 올릴 수 있는 다양한 방법이 있습니다. 저는 아로니구요 이건 더미 테스트용 글자입니다. 저는 이아름이구요 오리를 정말 좋아합니다.',
      date: '2024.07.25',
      username: '유저 이름',
      likes: 999,
    },
    {
      title:
        '게시글이 있습니다. 자유게시판에 글 올리고 싶어요? 여기 올릴 수 있는 다양한 방법이 있습니다. 저는 아로니구요 이건 더미 테스트용 글자입니다. 저는 이아름이구요 오리를 정말 좋아합니다.',
      date: '2024.07.25',
      username: '유저 이름',
      likes: 999,
      image: '/placeholder.jpg',
    },
  ];

  return (
    <div className="h-100vh relative mx-auto mt-10 w-[1200px]">
      <h2 className="text-2xl-bold mb-10 text-slate-50">자유게시판</h2>
      <SearchArea />
      <BestPostList posts={bestPosts} />
      <div className="mb-10 border border-slate-50/10"></div>
      <SortDropdownArea
        isOpen={isOpen}
        selectedOption={selectedOption}
        onToggle={handleToggle}
        onSelect={handleSelect}
      />
      <PostList
        posts={posts}
        isOpen={isOpen}
        onToggle={handleToggle}
        onSelect={handleSelect}
      />
      <WriteButton />
    </div>
  );
}
