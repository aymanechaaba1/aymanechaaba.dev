import Testimonials from '@/components/Testimonials';
import TestimonialsSkeleton from '@/components/skeletons/TestimonialsSkeleton';
import { Separator } from '@/components/ui/separator';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackError from '@/components/FallbackError';
import Image from 'next/image';
import { Suspense } from 'react';
import DownloadResumeBtn from '@/components/DownloadResumeBtn';

const skills = [
  'NextJS, TailwindCSS, Typescript, SQL, Firebase, tRPC, Prisma, Drizzle, Redux, Zustand, NextAuth, shadcn',
];

const hobbies = [
  'Football ⚽️',
  'Bodybuilding 🏋️‍♀️',
  'Reading 📚',
  'Movies 🍿',
  'Guitar 🎸',
];

export default function Home() {
  return (
    <div className="my-5 space-y-3">
      <section>
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/school-manager-e26b7.appspot.com/o/WhatsApp%20Image%202023-09-08%20at%2012.58.34%20PM.jpeg?alt=media&token=1eb90c0e-40de-4ae7-8578-c7e702c1f8a8`}
          alt="Aymane Chaaba"
          width={100}
          height={100}
          className="rounded-lg mb-3"
        />
        <h1 className="text-xl font-medium">
          Hey, I&apos;m Aymane Chaaba 👋 <br />
        </h1>
        <p className="text-sm tracking-tight">
          <span className="font-semibold">Javascript Developer</span> from
          Morocco 🇲🇦
        </p>
      </section>

      <DownloadResumeBtn />
      <Separator />
      <section>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Skills
        </h3>
        <ul>
          {skills.map((skill, i) => (
            <li key={i} className="text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Hobbies
        </h3>
        <div className="space-x-2 divide-x">
          {hobbies.map((hobby, i) => (
            <span key={i} className="pl-2 first:pl-0 text-sm md:text-base">
              {hobby}
            </span>
          ))}
        </div>
      </section>
      <Separator />
      <section>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Testimonials
        </h3>
        <ErrorBoundary fallbackRender={FallbackError}>
          <Suspense fallback={<TestimonialsSkeleton />}>
            <Testimonials />
          </Suspense>
        </ErrorBoundary>
      </section>
    </div>
  );
}
