import { v4 as uuidv4 } from 'uuid';
import { RiNextjsFill } from 'react-icons/ri';
import ProjectPreview from './ProjectPreview';
import { Project } from '@/types';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMdx, SiTypescript } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoVercel } from 'react-icons/io5';
import { SiDrizzle } from 'react-icons/si';
import { SiPrisma } from 'react-icons/si';
import Logo from './Logo';
import { LOGO_URL } from '@/config';

const projects: Project[] = [
  {
    id: uuidv4(),
    name: 'Profans',
    description: 'Buy events tickets Online RIGHT FROM YOUR BED.',
    live_url: 'https://profans.pro',
    logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/profans%2Ftadakirnet-clone%20logo2.webp?alt=media&token=fed41351-06a5-48bc-978d-a25c5532e305',
    repo: 'https://github.com/aymanechaaba1/profans',
    stack: [
      {
        name: 'nextjs',
        icon: <RiNextjsFill size={20} />,
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
    logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/antiexcel%2FScreenshot%202023-12-09%20at%204%20(1).webp?alt=media&token=1ecbbc5b-2bc4-4bb8-88cc-ad40dfa6fa0c',
    repo: 'https://github.com/aymanechaaba1/antiexcel',
    stack: [
      {
        name: 'nextjs',
        icon: <RiNextjsFill size={20} />,
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
    logo: <Logo url={LOGO_URL} />,
    repo: 'https://github.com/aymanechaaba1/aymanechaaba.dev',
    stack: [
      {
        name: 'nextjs',
        icon: <RiNextjsFill size={20} />,
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
    <div className="mt-10">
      <h1 className="text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#555] to-[#000] dark:from-[#fff] dark:to-[#adadad] after:content-[''] after:hidden after:w-[100px] after:h-[1px] after:mt-1 after:bg-gradient-r after:from-[#444] after:to-[#aaa]">
        Projects
      </h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-x-5">
        {projects.map((project) => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
