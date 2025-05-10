import Button from '@/components/common/Button';

export default function WriteButton() {
  return (
    <div className="fixed right-10 bottom-6 w-[104px]">
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
  );
}
