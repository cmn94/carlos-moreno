import Image from 'next/image';
import javascriptLogo from '@/assets/img/javascript-logo.webp';
import angularLogo from '@/assets/img/angular-logo.webp';
import reduxLogo from '@/assets/img/redux-logo.webp';
import typeScriptLogo from '@/assets/img/typescript-logo.webp';
import stencilLogo from '@/assets/img/stencil-logo.webp';
import reactLogo from '@/assets/img/react-logo.webp';
import nextLogo from '@/assets/img/next-logo.webp';
import rxjsLogo from '@/assets/img/rxjs-logo.webp';
import { cn } from '@/lib/utils';

export function TechStack() {
  const images = [
    { src: javascriptLogo, alt: 'Javascript' },
    { src: angularLogo, alt: 'Angular' },
    { src: reduxLogo, alt: 'Redux' },
    { src: typeScriptLogo, alt: 'Typescript' },
    { src: stencilLogo, alt: 'Stencil.js' },
    { src: reactLogo, alt: 'React' },
    { src: nextLogo, alt: 'Next.js' },
    { src: rxjsLogo, alt: 'Rxjs' },
  ];

  return (
    <div className={cn('md:w-2/5')}>
      <h2 className={cn('md:text-2xl text-sm font-semibold text-primary-200 mb-4')}>Tech Stack.</h2>
      <div className={cn('flex items-center gap-5 flex-wrap')}>
        {
            images.map((image) => (
              <div key={image.alt} className={cn('flex items-center flex-col justify-between h-20')}>
                <Image src={image.src} alt={image.alt} width={50} height={50} />
                <span className={cn('font-semibold text-xs md:text-base')}>{image.alt}</span>
              </div>
            ))
        }
      </div>
    </div>
  );
}
