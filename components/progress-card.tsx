import Image, { StaticImageData } from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export function ProgressCard({
  title,
  level,
  children,
  dialog,
  icon,
  titleUrl,
}: {
  title: string;
  level: number;
  children?: React.ReactNode;
  dialog?: React.ReactNode;
  icon: StaticImageData;
  titleUrl: string;
}) {
  return (
    <Card className={cn('w-full lg:w-1/4 m-3 lg:m-5')}>
      <CardHeader className={cn('flex flex-nowrap flex-row items-center')}>
        <div className={cn('relative  mr-2')} style={{ width: '50px', height: '50px' }}>
          <Image src={icon} alt="Skill logo" fill sizes="50px" className={cn('rounded object-contain')} />
        </div>
        <div className={cn('flex-auto')}>
          <CardTitle className={cn('mb-1 lg:text-xl text-lg')}><a href={titleUrl}>{title}</a></CardTitle>
          <Progress value={level} className={cn('bg-[rgba(25,25,25,0.4)]')} />
        </div>
      </CardHeader>
      {
        children
        && (
        <CardContent>
          {children}
        </CardContent>
        )
      }
      {
        dialog
        && (
        <CardFooter>
          {dialog}
        </CardFooter>
        )
      }
    </Card>
  );
}
