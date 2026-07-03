import { cn } from '@/utils/cn';

interface ConstellationProps extends Omit<React.SVGProps<SVGSVGElement>, 'points'> {
  points?: Array<[number, number]>;
}

export function Constellation({ points = [[8, 8], [24, 18], [40, 6], [56, 24]], className, ...props }: ConstellationProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn('h-24 w-24', className)} {...props}>
      <path d={points.map(([x, y], index) => `${index === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ')} stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none" />
      {points.map(([x, y], index) => <circle key={`${x}-${y}-${index}`} cx={x} cy={y} r="0.8" fill="rgba(255,255,255,0.8)" />)}
    </svg>
  );
}
