'use server';

import NewClientEmail from '@/components/emails/NewClientEmail';
import resend from '@/lib/resend';
import * as z from 'zod';

const ContactFormSchema = z.object({
  firstname: z
    .string({
      invalid_type_error: 'First Name must be a string',
    })
    .trim()
    .min(6, {
      message: 'First Name must contain at least 6 characters.',
    }),
  lastname: z
    .string({
      invalid_type_error: 'Last Name must be a string',
    })
    .trim()
    .min(6, {
      message: 'Last Name must contain at least 6 characters',
    }),
  company_name: z
    .string({
      invalid_type_error: 'Company Name must be a string',
    })
    .trim()
    .min(10, {
      message: 'Company Name must contain at least 10 characters',
    }),
  email: z
    .string({
      invalid_type_error: 'Email must be a string',
    })
    .email({
      message: 'Invalid Email',
    }),
  project_start_date: z.enum([
    'asap',
    'in_1_month',
    'in_3_months',
    'in_6_months',
    'this_year',
  ]),
  budget: z.enum(['500-1000', '1000-4999', '5000-10000', '10000+']),
  brief_description: z
    .string({
      invalid_type_error: 'Brief Description must be a string',
    })
    .min(20, {
      message: 'Project Brief Description must contain at least 20 characters',
    })
    .max(2000, {
      message: 'Project Brief Description must contain at max 2000 characters',
    }),
});

export type NewUser = z.infer<typeof ContactFormSchema>;

export const submitForm = async (prevState: any, formData: FormData) => {
  //  validate inputs
  const validatedFields = ContactFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };

  // send form data to my email
  const { company_name, email } = validatedFields.data;

  const data = await resend.emails.send({
    from: `${company_name} <onboarding@resend.dev>`,
    to: ['aymanechaaba1@gmail.com'],
    subject: '🎉 NEW Client',
    react: NewClientEmail({
      newClient: validatedFields.data,
    }),
  });

  if (data.error)
    return {
      email: {
        ok: false,
        message: `Failed to send message ❌, Try Again ⤴`,
      },
    };

  if (data.data)
    return {
      email: {
        ok: true,
        message: 'Message Sent 👍',
      },
    };
};
