'use server';

import { db } from '@/lib/firebase';
import resend from '@/lib/resend';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { redirect } from 'next/navigation';
import * as z from 'zod';

export async function secureSeat(formData: FormData) {
  let data = Object.fromEntries(formData.entries()) as {
    full_name: string;
    email: string;
  };

  let schema = z.object({
    full_name: z.string().min(4),
    email: z.string().email(),
  });

  let result = schema.safeParse(data);

  if (!result.success) return result.error.flatten().fieldErrors;

  let doc = await addDoc(collection(db, 'challengers'), result.data);

  // const { data, error } = await resend.emails.send({
  //   from: 'Acme <onboarding@resend.dev>',
  //   to: [result.data.email],
  //   subject: ``,
  //   react: EmailTemplate({ firstName: 'John' }),
  // });

  redirect(`/challenge/confirmation/${doc.id}`);
}
