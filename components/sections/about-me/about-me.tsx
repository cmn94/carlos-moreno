import { cn } from '@/lib/utils';
import Facts from '@/components/sections/about-me/facts';
import { TechStack } from '@/components/sections/about-me/tech-stack';

export default function AboutMe() {
  return (
    <section id="about" className={cn('w-screen flex flex-col justify-center md:items-center bg-primary-500 text-left py-16 px-8')}>
      <div className={cn('max-w-5xl md:px-0')}>
        <h1 className={cn('md:text-5xl text-xl font-bold mb-5')}>About me.</h1>
        <div className={cn('flex flex-col md:flex-row md:justify-between')}>
          <Facts />
          <TechStack />
        </div>
      </div>
    </section>
  );
}
