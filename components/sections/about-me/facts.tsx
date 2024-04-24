import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { facts } from '@/data/facts';

export default function Facts() {
  return (
    <div className={cn('md:text-2xl text-sm font-semibold mb-6 md:w-1/2')}>
      <div>
        <h2 className={cn('text-primary-200 pb-0  ')}>Quick facts.</h2>
        <Accordion type="single" collapsible>
          {
                facts.map((fact) => (
                  <AccordionItem value={fact.title} key={fact.title}>
                    <AccordionTrigger><div className={cn('font-semibold')}>{ fact.title }</div></AccordionTrigger>
                    <AccordionContent><div className={cn('font-normal')}>{ fact.description }</div></AccordionContent>
                  </AccordionItem>
                ))
            }
        </Accordion>
      </div>
    </div>
  );
}
