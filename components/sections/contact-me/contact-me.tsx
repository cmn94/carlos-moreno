import { ContactMeForm } from '@/components/contact-me-form';
import Image from 'next/image';
import emailIcon from '@/assets/img/email-icon.webp';
import { cn } from '@/lib/utils';
import whatsappLogo from '@/assets/img/whatsapp-logo.webp';
import linkedLogo from '@/assets/img/linkedin-logo.webp';

export default function ContactMe() {
  return (
    <section id="contact" className={cn('flex justify-center bg-primary-500 text-left py-16 px-8')}>
      <div className={cn('w-96 mx-automd:px-0 flex flex-col items-center')}>
        <div className={cn('relative w-20 lg:w-40 h-20 lg:h-40')}>
          <Image
            src={emailIcon}
            alt="Toon avatar"
            fill
            sizes="(min-width: 1024px) 10rem, 5rem"
            priority
            className={cn('object-contain')}
          />
        </div>
        <h1 className={cn('lg:text-5xl text-lg font-bold text-center my-2 lg:my-5 lg:mt-0')}>Contact me</h1>
        <div className={cn('mt-6 flex justify-center')}>
          <div className={cn('relative  mr-2')} style={{ width: '50px', height: '50px' }}>
            <a href="https://wa.me/+34666028195">
              <Image src={whatsappLogo} alt="Whatsapp logo" width={50} height={50} className={cn('rounded object-contain')} />
            </a>
          </div>
          <div className={cn('relative  mr-2')} style={{ width: '50px', height: '50px' }}>
            <a href="https://www.linkedin.com/in/marcos-salvo/">
              <Image src={linkedLogo} alt="Linkedin logo logo" width={50} height={50} className={cn('rounded object-contain')} />
            </a>
          </div>
        </div>
        <ContactMeForm />
      </div>
    </section>
  );
}
