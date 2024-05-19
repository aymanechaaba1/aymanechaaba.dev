import { Service as S } from '@/types';
import Service from './Service';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { SiVercel } from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';
import AceternityBtn from './AceternityBtn';
import Link from 'next/link';
import { onBoardingEventUrl } from '@/config';
import FreelacingTabBtn from './FreelacingTabBtn';

const teachingServices: S[] = [
  {
    id: uuidv4(),
    description: (
      <p>
        Help new developers build a strong portfolio with{' '}
        <strong>Real-World</strong> projects.
      </p>
    ),
  },
  {
    id: uuidv4(),
    description: (
      <p>
        Teach High In-Demand Skills like <strong>ReactJS</strong>,{' '}
        <strong>NextJS</strong>, <strong>Typescript</strong>,{' '}
        <strong>Javascript</strong>, TailwindCSS, , <strong>Zod</strong>,{' '}
        <strong>NoSQL</strong>, <strong>SQL</strong>, <strong>Firebase</strong>,{' '}
        <strong>Prisma</strong>, <strong>Drizzle</strong>,{' '}
        <strong>Docker</strong>, <strong>MDX</strong>.
      </p>
    ),
  },
  {
    id: uuidv4(),
    description: (
      <p>
        Build servers and APIs <strong>with no NodeJS knowledge</strong>.
      </p>
    ),
  },
  {
    id: uuidv4(),
    description: (
      <p>
        CI/CD Workflow to work as a <strong>Professional Senior</strong>{' '}
        Developer.
      </p>
    ),
  },
  {
    id: uuidv4(),
    description: (
      <p>
        Teach you Project Management with <strong>Agile Methodologies</strong>{' '}
        using the modern frameworks <strong>Scrum</strong>.
      </p>
    ),
  },
  {
    id: uuidv4(),
    description: (
      <p>
        Explain theory concepts like{' '}
        <strong className="inline bg-gradient-to-r from-lime-500 dark:from-lime-200 dark:via-green-400 dark:to-lime-200 via-green-600 to-lime-500 bg-clip-text font-display tracking-tight text-transparent">
          Design Patterns
        </strong>
        ,{' '}
        <strong className="inline bg-gradient-to-r from-orange-500 dark:from-orange-200 dark:via-yellow-400 dark:to-orange-200 via-yellow-600 to-orange-400 bg-clip-text font-display tracking-tight text-transparent">
          Rendering Patterns
        </strong>
        ,{' '}
        <strong className="inline bg-gradient-to-r from-indigo-500 dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200 via-sky-600 to-indigo-400 bg-clip-text font-display tracking-tight text-transparent">
          React Patterns
        </strong>
        ,{' '}
        <strong className="inline bg-gradient-to-r from-yellow-500 dark:from-yellow-200 dark:via-amber-400 dark:to-yellow-200 via-amber-500 to-yellow-500 bg-clip-text font-display tracking-tight text-transparent">
          Event Loop
        </strong>
        .
      </p>
    ),
  },
  {
    id: uuidv4(),
    description: (
      <p>
        Principles of <strong>Clean Modern UI</strong> similar to{' '}
        <SiVercel className="inline align-middle" /> style.
      </p>
    ),
  },
  {
    id: uuidv4(),
    description: (
      <p>
        Master Unit Testing Workflow with <strong>Jest</strong>,{' '}
        <strong>Vitest</strong> and <strong>React Testing Library</strong>.
      </p>
    ),
  },
];

const freelanceServices: S[] = [
  {
    id: uuidv4(),
    description: (
      <p>
        Add <strong>new features</strong> to your project.
      </p>
    ),
  },
  {
    id: uuidv4(),
    description: <p>Build your project from scratch.</p>,
  },
];

type Category = {
  name: string;
  services: S[];
};
const categories: Category[] = [
  {
    name: 'Coaching',
    services: teachingServices,
  },
  {
    name: 'Freelancing',
    services: freelanceServices,
  },
];

function Services() {
  return (
    <>
      <h1 className="ac-heading text-center">My Services</h1>
      <div className="mt-4">
        <div className="">
          <TabGroup>
            <TabList className="flex justify-center md:justify-start gap-x-4">
              {categories.map(({ name }, i) => (
                <Tab
                  key={i}
                  className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-zinc-900/10 dark:data-[selected]:bg-white/10 data-[hover]:bg-zinc-900/5 dark:data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-zinc-900/10 dark:data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-zinc-900 dark:data-[focus]:outline-white"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-3">
              {categories.map(({ name, services }, i) => (
                <TabPanel
                  key={i}
                  className="bg-white/5 rounded-lg p-5 mb-10 zinc-ring-shadow"
                >
                  <div
                    className="space-y-4 
                  "
                  >
                    {services?.map((service) => (
                      <Service key={service.id} service={service} />
                    ))}
                  </div>
                  {name.toLowerCase() === 'coaching' && (
                    <Link href={onBoardingEventUrl} target="_blank">
                      <AceternityBtn label="Enroll Now" />
                    </Link>
                  )}
                  {name.toLowerCase() === 'freelancing' && <FreelacingTabBtn />}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </>
  );
}

export default Services;
