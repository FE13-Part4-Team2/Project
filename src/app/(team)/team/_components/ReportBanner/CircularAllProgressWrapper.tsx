'use client';
import useWindowSize from '@/hooks/useGetViewport';
import CircularAllProgress from './CircularAllProgress';

interface Props {
  percentage: number;
}

const CircularAllProgressWrapper = ({ percentage }: Props) => {
  const { width } = useWindowSize();
  const isReady = width > 0;
  const isMobile = width < 768;

  if (!isReady) return null;

  return (
    <CircularAllProgress percentage={percentage} size={isMobile ? 120 : 165} />
  );
};

export default CircularAllProgressWrapper;
