import { cn } from '@/lib/utils';
import Image from 'next/image';
import selfie from '@/assets/img/selfie.webp';
import linkedLogo from '@/assets/img/linkedin-logo.webp';
import ResumeButton from '../../resume-button';

export default function Home() {
  return (
    <section id="home" className={cn('flex flex-col py-4 items-center min-h-[calc(100vh-59px)] justify-center bg-gradient-to-br from-primary-500 to-primary')}>
      <div className={cn('max-w-7xl mx-auto w-screen flex items-center gap-2 md:gap-20 flex-col md:flex-row justify-center')}>
        <div className={cn('relative w-32 md:w-60 h-32 md:h-60 mb-3 flex')}>
          <Image
            src={selfie}
            alt="Toon avatar"
            fill
            sizes="(min-width: 1024px) 16rem, 8rem"
            priority
            className={cn('rounded-full object-contain border-solid border-2 border-white')}
          />
        </div>
        <div className={cn('flex flex-col items-center gap-4')}>
          <div>
            <h1 className={cn('md:text-2xl text-sm font-semibold text-center mb-1 md:mb-2 md:mt-0')}>Hi, I&#39;m Marcos👋</h1>
            <h2 className={cn('md:text-5xl text-primary-200 text-xl font-bold text-center mb-1 md:mb-2')}>
              Mid Frontend developer
            </h2>
            <h2 className={cn('md:text-2xl text-sm font-semibold text-center md:mt-0')}>
              Specialized in Angular and React.js
            </h2>
          </div>
          <div className={cn('flex gap-5')}>
            <ResumeButton />
            <div className={cn('relative mr-2')} style={{ width: '40px', height: '40px' }}>
              <a href="https://www.linkedin.com/in/marcos-salvo/">
                <Image src={linkedLogo} alt="Linkedin logo logo" width={40} height={40} className={cn('rounded object-contain')} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
