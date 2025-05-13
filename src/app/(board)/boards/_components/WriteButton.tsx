import Button from '@/components/common/Button';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export default function WriteButton() {
  return (
    <Link href={ROUTES.ARTICLE_ADD}>
      <div className="fixed right-55 bottom-6 w-[104px]">
        <Button
          variant="floating"
          styleType="default"
          radius="lg"
          size="lg"
          className="w-full"
          startIcon="plus"
        >
          글쓰기
        </Button>
      </div>
    </Link>
  );
}
