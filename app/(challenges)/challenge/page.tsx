import Timer from '@/components/Timer';
import Image from 'next/image';
import React from 'react';
import { Button } from '@headlessui/react';
import { Calendar } from 'lucide-react';
import FAQ, { Faq } from '@/components/FAQ';
import Schedule from '@/components/challenge/Schedule';
import Reviews, { Review } from '@/components/challenge/Reviews';
import ChallengeDialog from '@/components/challenge/ChallengeDialog';

let schedule = [
  {
    image: `https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2157351071/settings_images/720db-c20f-e73-d213-fc25305020_5_Day_AI_SaaS_Challenge.png`,
    title: `DAY 1 - 4 | Digital Portfolio v4 + Building the SaaS App`,
    description:
      'Build a fully-featured SaaS AI app with real recurring subscription payments.',
  },
  {
    image:
      'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2157351071/settings_images/ebfe1-bbfb-8d6-2d24-6d6a54114efa_5_Day_AI_SaaS_Challenge_DAY_5.png',
    title: 'DAY #5 | GRAND FINALE',
    description:
      'Finish with a next-gen developer training session to supercharge your career.',
  },
];

let faqs: Faq[] = [
  {
    question: "Is this Challenge completely FREE? What's the catch?",
    answer: (
      <div className="space-y-2">
        <strong>There is no catch... It&apos;s completely FREE!</strong>
        <p>
          The amount of tech you will learn along with all the free goodies that
          you will receive will definitely be worth it!
        </p>
        <p>
          By the end of Day 5, you would have an incredible AI SaaS App that can
          generate revenue for you!{' '}
        </p>
      </div>
    ),
  },
  {
    question: 'What do I get if I Refer a Friend for the Challenge?',
    answer: (
      <div className="space-y-2">
        <strong>Yes!</strong>
        <p>
          The amount of tech you will learn along with all the free goodies that
          you will receive will definitely be worth it!
        </p>
        <p>
          You will receive an extra 10 points in the challenge per referral. In
          order for it to be valid, you have to provide image proof in
          University of Code.
        </p>
      </div>
    ),
  },
  {
    question: 'Do I have to submit homework everyday?',
    answer: (
      <div className="space-y-2">
        <strong>Yes!</strong>
        <p>
          If you want to <strong>WIN</strong> the AI SaaS Challenge then
          homework submission every day is essential!
        </p>
        <p>
          However, if you just want to learn and have the AI SaaS App on a
          portfolio that we will provide to you, then just show up and code
          along. Just make sure to be there for the Grand Finale on Day 5!
        </p>
      </div>
    ),
  },
  {
    question: 'Are the seats really limited? Why?',
    answer: (
      <div className="space-y-2">
        <strong>Yes!</strong>
        <p>
          We want your experience to be interactive and personal, so we have
          limited seats. This gives you plenty of opportunities to ask questions
          and interact with one another during the 5 Days of the AI SaaS
          Challenge!
        </p>
      </div>
    ),
  },
];

let reviews: Review[] = [
  {
    name: 'Colin Gillingham',
    testimonial:
      'I landed my first job right after finishing training with Aymane, His coding style is modern and unique to such an extent that my portfolio was picked from first 10 candidates, Thank You so much!!',
    role: 'Full Stack Developer',
    avatar:
      'https://framerusercontent.com/images/I2SOtgF3GbRo65hKtpUgDZYLJE.jpg',
  },
  {
    name: 'Colin Gillingham',
    testimonial:
      "It's not like a Udemy course or Coursera course, It's a different way of training, It's a mentorship covering not just coding but also mindset, entrepreuneurship, business.",
    role: 'React Developer',
    avatar:
      'https://framerusercontent.com/images/I2SOtgF3GbRo65hKtpUgDZYLJE.jpg',
  },
  {
    name: 'Colin Gillingham',
    testimonial:
      "Somehow people look for cheap courses online. I'm a real example of tutorial hell and watching online boring courses. I've quitted so many times because I lost energy, stumble upon boredom and felt lost. there is a big difference between watching a course and a LIVE coaching with an expert. Aymane will guide you through a roadmap that will guarantee success.",
    role: 'React Developer',
    avatar:
      'https://framerusercontent.com/images/I2SOtgF3GbRo65hKtpUgDZYLJE.jpg',
  },
];

function ChallengePage() {
  return (
    <div>
      <div className="container">
        <div className="flex items-center">
          <h1 className="text-3xl text-center font-semibold tracking-tight scroll-m-20 mt-5 w-2/3">
            🔴 Build your first AI SaaS app LIVE with me with ReactJS, NextJS,
            Typescript, TailwindCSS.
          </h1>
          <Timer gridCols={2} />
        </div>
        <ChallengeDialog
          buttonLabel={
            <Image
              src={`https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2157351071/settings_images/6ecfd6a-6d6e-88e4-372d-45f31e6858a_5_Day_AI_SaaS_Challenge.png`}
              width={1920}
              height={1080}
              alt=""
              className="object-cover w-full mt-5 rounded-lg cursor-pointer"
            />
          }
        />
        <h1 className="text-center text-2xl font-semibold tracking-tight mt-2">
          It&apos;s your{' '}
          <span className="text-emerald-500">Ultimate Opportunity</span> to make
          your portfolio <span className="text-emerald-500">shines</span> from{' '}
          <span className="text-red-500">average</span> developers.
        </h1>
        <div className="flex items-center gap-x-3 mt-5 text-center justify-center">
          <Calendar />
          <p className="font-semibold">
            Saturday, August 21, 2024 12:00 PM +01
          </p>
        </div>
        <p className="mt-3 text-red-500 text-center font-semibold">
          HURRY! We have only LIMITED SEATS available!
        </p>
        <ChallengeDialog
          buttonLabel={
            <Button
              type="button"
              className="inline-flex w-full mt-5 items-center gap-2 rounded-md bg-emerald-700 text-center justify-center uppercase text-xl py-1.5 px-3 font-bold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-emerald-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              Reserve My Seat (Limited to 1000 Seats)
            </Button>
          }
        />
      </div>

      {/* SCHEDULE */}
      <Schedule />

      {/* <LogosScroll
        logos={[
          <IoLogoJavascript size={26} />,
          <FaReact size={26} />,
          <RiNextjsFill size={26} />,
          <SiTypescript size={26} />,
          <RiTailwindCssFill size={26} />,
          <FaStripe size={26} />,
          <AiFillOpenAI size={26} />,
        ]}
      /> */}

      {/* AUTHORITY & TRUST */}
      <div className="relative min-h-[850px]">
        <Image
          src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2157351071/settings_images/1f8d335-c8fb-d6d-e8c-c6d10eaa2da3_DSC08758.JPG"
          width={1920}
          height={1080}
          className="object-cover w-full mt-5"
          alt=""
        />
        <div className="flex justify-center">
          <div className="w-[450px] mx-auto min-h-[300px] bg-white/70 dark:bg-black/50 rounded-sm backdrop-blur-xl absolute top-[160px] dark:text-white p-5">
            <h3 className="font-semibold text-xl mb-1">
              I&apos;M AYMANE CHAABA. 💯
            </h3>
            <p>
              Your <span className="font-bold">Mentor</span> for the Full Stack
              AI SaaS Challenge!
            </p>
            <div className="space-y-3 mt-3">
              <p>
                As an experienced Full Stack Developer for{' '}
                <span className="font-bold">more than 10 years</span>, I have
                worked both in corporations & startups through several rounds of
                funding. I took my coding experience and reshaped the tutorial
                space by providing a new wave of e-learning content, which gave
                rise to my current position:{' '}
                <span className="font-bold">
                  The Founder & CEO of Zero to Dev Hero
                </span>{' '}
                - The world&apos;s best developer community!
              </p>
              <p>
                Today{' '}
                <span className="font-bold">
                  I teach students across the globe
                </span>{' '}
                through interactive high-energy live coaching calls, which has
                led to the success of{' '}
                <span className="font-bold">many students</span> landing their
                dream jobs!
              </p>
              <p>
                I also run several <strong>6-figure eCOM businesses</strong> and
                a software agency and a bunch of digital products. I have
                collaborated with the best in the industry including, but not
                limited to{' '}
                <span className="font-bold">
                  Microsoft, IBM, Stripe & Paypal!
                </span>
              </p>
              <p>
                Taking all my experience and knowledge, I will be your
                instructor for this Full Stack SaaS Challenge where, by the end,
                you will have a Full Stack SaaS App that will have the potential
                to generate an Insane Revenue for you!
              </p>
              <p>
                Good luck and let&apos;s get it <strong>DEV HEROES!</strong> 🔥
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF & REVIEWS  */}
      <Reviews reviews={reviews} />

      {/* FAQs */}
      <div className="mb-5 container">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQ key={i} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChallengePage;
