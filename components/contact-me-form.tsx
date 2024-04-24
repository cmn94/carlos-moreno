'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { formSchema } from '@/models/form.schema';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function ContactMeForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submittedOk' | 'submittedKo'>('idle');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: '',
      user_email: '',
      message: '',
    },
  });

  const getSubmitStatusJsx = () => {
    if (formState === 'idle') {
      return <Button type="submit" variant="secondary">Send email</Button>;
    } if (formState === 'submitting') {
      return <Button type="submit" variant="secondary" disabled>Submitting...</Button>;
    } if (formState === 'submittedOk') {
      return <p>Your message was submitted correctly!</p>;
    }
    return <p className={cn('text-red')}>There was an error submitting your message, please try again later.</p>;
  };

  function onSubmit() {
    setFormState('submitting');
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, 'form', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string)
      .then(() => {
        setFormState('submittedOk');
      }, () => {
        setFormState('submittedKo');
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-2 w-full lg:space-y-4')}>
        <FormField
          control={form.control}
          name="user_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl className={cn('text-black')}>
                <Input placeholder="Jhon Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="user_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl className={cn('text-black')}>
                <Input placeholder="jhon-doe@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className={cn('flex flex-col')}>
              <FormLabel className={cn('mt-2')}>Message</FormLabel>
              <FormControl className={cn('text-black')}>
                <textarea placeholder="Hello Marcos, I would like to tell you about..." {...field} className={cn('h-40 lg:h-20 rounded p-2 text-sm text-black')} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={cn('flex justify-center')} style={{ marginTop: '16px' }}>
          {getSubmitStatusJsx()}
        </div>
      </form>
    </Form>
  );
}
