import { experiences } from '@/data/experiences';
import TimelineItem from '@/components/sections/experience-and-education/timeline-item';
import { cn } from '@/lib/utils';

export default function Experience() {
  return (
    <div id="experience" className={cn('w-full flex flex-col justify-center md:items-center bg-primary text-left')}>
      <ol className={cn('w-full relative border-s border-gray-200 dark:border-gray-700 dark:text-gray-400')}>
        {
            experiences.map((experience, i) => (
              <TimelineItem
                key={experience.description}
                {...experience}
                lastItem={i === experiences.length - 1}
                mainItemsTitle="Main Activities"
                secondaryItemsTitle="Secondary Activities"
                showDuration
              />
            ))
        }
      </ol>
    </div>
  );
}
