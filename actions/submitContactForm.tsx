'use server';

import NewClientEmail from '@/components/emails/NewClientEmail';
import NewMessageEmail from '@/components/emails/NewMessageEmail';
import resend from '@/lib/resend';
import * as z from 'zod';

export const submitContactForm = async (prevState: any, formData: FormData) => {
  let data = Object.fromEntries(formData.entries()) as {
    fullName: string;
    email: string;
    message: string;
  };

  let schema = z.object({
    fullName: z.string().min(4, 'fullName must contain at least 4 characters'),
    email: z.string().email('invalid email'),
    message: z.string().min(30, 'message must contain at least 30 characters'),
  });

  let result = schema.safeParse(data);

  if (!result.success) return result.error.flatten().fieldErrors;

  let emailData = await resend.emails.send({
    from: `${result.data.fullName} <contact@aymanechaaba.dev>`,
    to: ['aymanechaaba@gmail.com'],
    subject: 'New Message',
    react: NewMessageEmail(result.data),
  });

  console.log(emailData);
};
