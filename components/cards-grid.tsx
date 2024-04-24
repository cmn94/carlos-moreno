import { cn } from '@/lib/utils';

export function CardsGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn('flex justify-center flex-wrap items-start my-3 w-full')}>
      {children}
    </div>
  );
}
