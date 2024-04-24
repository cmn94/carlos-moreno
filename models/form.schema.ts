'use client';

import * as z from 'zod';

export const formSchema = z.object({
  user_name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }).max(50),
  user_email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(2, { message: 'You must enter a message' }).max(1000),
});
