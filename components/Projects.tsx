import { v4 as uuidv4 } from 'uuid';
import { RiNextjsFill } from 'react-icons/ri';
import ProjectPreview from './ProjectPreview';
import { Project } from '@/types';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
  SiAnthropic,
  SiClerk,
  SiMdx,
  SiSanity,
  SiStripe,
  SiTypescript,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoVercel } from 'react-icons/io5';
import { SiDrizzle } from 'react-icons/si';
import { SiPrisma } from 'react-icons/si';
import Logo from './Logo';
import { LOGO_URL } from '@/config';
import ZustandIcon from './icons/ZustandIcon';
import ConvexIcon from './icons/ConvexIcon';
import LangChainIcon from './icons/LangChainIcon';
import { Bot, BotIcon } from 'lucide-react';

const projects: Project[] = [
  {
    id: uuidv4(),
    name: 'Ai Agent Assistant',
    description:
      'A sophisticated AI chat application built with Next.js, featuring real-time conversations, advanced prompt caching, and intelligent tool orchestration powered by LangChain and Claude 3.5 Sonnet.',
    live_url: 'https://ai-agents-mauve.vercel.app/',
    logo: {
      svg: <Bot size={30} />,
    },
    repo: 'https://github.com/aymanechaaba1/ai-agents',
    stack: [
      {
        name: 'nextjs',
        icon: <RiNextjsFill size={23} />,
      },
      {
        name: 'tailwind',
        icon: <RiTailwindCssFill size={20} />,
      },
      {
        name: 'typescript',
        icon: <SiTypescript size={20} />,
      },
      {
        name: 'clerk',
        icon: <SiClerk size={20} />,
      },
      {
        name: 'langchain',
        icon: <LangChainIcon />,
      },
      {
        name: 'anthropic',
        icon: <SiAnthropic size={23} />,
      },
      {
        name: 'convex',
        icon: <ConvexIcon size={23} />,
      },
      {
        name: 'vercel',
        icon: <IoLogoVercel size={20} />,
      },
    ],
    thumbnail: '',
  },
  {
    id: uuidv4(),
    name: 'ticketr',
    description:
      'A modern, real-time event ticketing platform built with Next.js 14, Convex, Clerk, and Stripe Connect. Features a sophisticated queue system, real-time updates, and secure payment processing.',
    live_url: 'https://ticketr-pink.vercel.app/',
    logo: {
      url: 'https://ticketr-pink.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.87a74875.png&w=256&q=75',
    },
    repo: 'https://github.com/aymanechaaba1/ticketr',
    stack: [
      {
        name: 'nextjs',
        icon: <RiNextjsFill size={23} />,
      },
      {
        name: 'tailwind',
        icon: <RiTailwindCssFill size={20} />,
      },
      {
        name: 'typescript',
        icon: <SiTypescript size={20} />,
      },
      {
        name: 'clerk',
        icon: <SiClerk size={20} />,
      },
      {
        name: 'stripe',
        icon: <SiStripe size={20} />,
      },
      {
        name: 'convex',
        icon: <ConvexIcon size={126} />,
      },
      {
        name: 'vercel',
        icon: <IoLogoVercel size={20} />,
      },
    ],
    thumbnail: '',
  },
  {
    id: uuidv4(),
    name: 'YCDirectory',
    description:
      'A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience.',
    live_url: 'https://yc-directory-woad.vercel.app/',
    logo: {
      url: 'https://yc-directory-woad.vercel.app/_next/image?url=%2Flogo.png&w=384&q=75',
    },
    repo: 'https://github.com/aymanechaaba1/ycDirectory',
    stack: [
      {
        name: 'nextjs',
        icon: <RiNextjsFill size={23} />,
      },
      {
        name: 'tailwind',
        icon: <RiTailwindCssFill size={20} />,
      },
      {
        name: 'typescript',
        icon: <SiTypescript size={20} />,
      },
      {
        name: 'sanity',
        icon: <SiSanity size={20} />,
      },
      {
        name: 'vercel',
        icon: <IoLogoVercel size={20} />,
      },
    ],
    thumbnail: '',
  },
  {
    id: uuidv4(),
    name: 'Shopply',
    description:
      'eCommerce website with full functionality powered by Sanity CMS.',
    live_url: 'https://shopply-rho.vercel.app/',
    logo: {
      name: 'Shopply',
      className: 'text-blue-500',
    },
    repo: 'https://github.com/aymanechaaba1/shopply',
    stack: [
      {
        name: 'nextjs',
        icon: <RiNextjsFill size={23} />,
      },
      {
        name: 'tailwind',
        icon: <RiTailwindCssFill size={20} />,
      },
      {
        name: 'typescript',
        icon: <SiTypescript size={20} />,
      },
      {
        name: 'sanity',
        icon: <SiSanity size={20} />,
      },
      {
        name: 'zustand',
        icon: <ZustandIcon size={23} />,
      },
      {
        name: 'vercel',
        icon: <IoLogoVercel size={20} />,
      },
    ],
    thumbnail: '',
  },
  {
    id: uuidv4(),
    name: 'Profans',
    description: 'Buy events tickets Online RIGHT FROM YOUR BED.',
    live_url: 'https://profans.pro',
    logo: {
      url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/profans%2Ftadakirnet-clone%20logo2.webp?alt=media&token=fed41351-06a5-48bc-978d-a25c5532e305',
    },
    repo: 'https://github.com/aymanechaaba1/profans',
    stack: [
      {
        name: 'nextjs',
        icon: <RiNextjsFill size={23} />,
      },
      {
        name: 'tailwind',
        icon: <RiTailwindCssFill size={20} />,
      },
      {
        name: 'typescript',
        icon: <SiTypescript size={20} />,
      },
      {
        name: 'postgres',
        icon: <BiLogoPostgresql size={20} />,
      },
      {
        name: 'drizzle',
        icon: <SiDrizzle size={20} />,
      },
      {
        name: 'vercel',
        icon: <IoLogoVercel size={20} />,
      },
    ],
    thumbnail: '',
  },
  {
    id: uuidv4(),
    name: 'AntiExcel',
    description: 'Manage your School Data ONLINE.',
    live_url: 'https://antiexcel.vercel.app',
    logo: {
      url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/antiexcel%2Fantiexcel-logo.png?alt=media&token=beb80b88-520e-414d-a9a8-8e74ffca95e8',
    },
    repo: 'https://github.com/aymanechaaba1/antiexcel',
    stack: [
      {
        name: 'nextjs',
        icon: <RiNextjsFill size={23} />,
      },
      {
        name: 'tailwind',
        icon: <RiTailwindCssFill size={20} />,
      },
      {
        name: 'typescript',
        icon: <SiTypescript size={20} />,
      },
      {
        name: 'postgres',
        icon: <BiLogoPostgresql size={20} />,
      },
      {
        name: 'prisma',
        icon: <SiPrisma size={20} />,
      },
      {
        name: 'vercel',
        icon: <IoLogoVercel size={20} />,
      },
    ],
    thumbnail: '',
  },
  {
    id: uuidv4(),
    name: 'Portfolio',
    description: 'My Portfolio.',
    live_url: 'https://aymanechaaba.vercel.app',
    logo: {
      url: LOGO_URL,
    },
    repo: 'https://github.com/aymanechaaba1/aymanechaaba.dev',
    stack: [
      {
        name: 'nextjs',
        icon: <RiNextjsFill size={23} />,
      },
      {
        name: 'tailwind',
        icon: <RiTailwindCssFill size={20} />,
      },
      {
        name: 'typescript',
        icon: <SiTypescript size={20} />,
      },
      {
        name: 'mdx',
        icon: <SiMdx size={20} />,
      },
      {
        name: 'vercel',
        icon: <IoLogoVercel size={20} />,
      },
    ],
    thumbnail: '',
  },
];

function Projects() {
  return (
    <section className="mt-10">
      <h1 className="ac-heading text-center md:text-left">Projects</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-x-5">
        {projects.map((project) => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
