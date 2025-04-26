import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>

      <IconRenderer name="CheckGreenIcon" className="" />
      <div className="h-40 w-40 rounded-tr-full bg-amber-100">
        <IconRenderer name="EditIcon" />
      </div>
    </div>
  );
}
