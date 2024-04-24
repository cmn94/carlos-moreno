import { Section } from '@/models/section';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import warning from '@/assets/img/warning.webp';

export default function MySection({ section }: { section: Section }) {
  const { name } = section;
  return (
    <main className={cn('flex min-h-screen flex-col items-center justify-between')}>
      <div className={cn('flex flex-col items-center justify-center')}>
        <Image src={warning} alt="Warning logo" width="80" height="80" className={cn('mt-6')} />
        <h1 className={cn('my-5 text-2xl text-center')}>
          👷‍♀️
          {name}
          {' '}
          section under construction 👷
        </h1>
      </div>
    </main>
  );
}
