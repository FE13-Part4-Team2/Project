import TeamBanner from '@/app/(team)/team/_components/TeamBanner';

export default function TeamPage({ params }: { params: { teamid: string } }) {
  return (
    <div className="flex h-screen w-full flex-col items-center p-6">
      <TeamBanner groupId={Number(params.teamid)} />
    </div>
  );
}
