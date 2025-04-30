import Button from '@/components/common/Button';

export default function CreateTaskButton() {
  return (
    <Button
      variant="floating"
      styleType="default"
      radius="lg"
      size="lg"
      className="fixed right-6 bottom-6 min-w-[125px] xl:right-auto xl:left-1/2 xl:translate-x-[475px]"
      startIcon="plus"
    >
      할 일 추가
    </Button>
  );
}
