import TimelineItem from '@/components/sections/experience-and-education/timeline-item';
import { cn } from '@/lib/utils';
import { educations } from '@/data/educations';

export default function Education() {
  return (
    <div id="education" className={cn('w-full flex flex-col justify-center md:items-center bg-primary text-left')}>
      <ol className={cn('w-full relative border-s border-gray-200 dark:border-gray-700 dark:text-gray-400')}>
        {
            educations.map((education, i) => (
              <TimelineItem
                key={education.description}
                {...education}
                lastItem={i === educations.length - 1}
                mainItemsTitle="Main Skills"
              />
            ))
        }
      </ol>
    </div>
  );
}
