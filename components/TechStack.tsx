import { RiNextjsFill, RiTailwindCssFill, RiReactjsFill } from 'react-icons/ri';
import {
  SiTypescript,
  SiDrizzle,
  SiPrisma,
  SiClerk,
  SiShadcnui,
  SiJira,
  SiVitest,
  SiJest,
} from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { IoLogoVercel, IoLogoFirebase } from 'react-icons/io5';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiScrum } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';

function TechStack() {
  return (
    <div className="relative block max-w-full md:max-w-[400px] lg:max-w-[500px] mx-auto overflow-hidden mt-10">
      <div className="relative">
        <div className="pointer-events-none absolute -left-px -top-6 z-10 h-24 w-2 bg-gradient-to-r from-white px-4 py-2 md:w-8 lg:w-24 dark:from-[#020817] dark:via-[#020817ea]" />
        <div className="pointer-events-none absolute -top-6 right-0 z-10 h-24 w-4 bg-gradient-to-l from-white px-4 py-2 md:w-8 lg:w-24 dark:from-[#020817] dark:via-[#020817]" />
        <div className="flex items-center justify-center gap-x-5 animate-slide ">
          <RiNextjsFill
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
          <RiTailwindCssFill
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
          <RiReactjsFill
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
          <SiTypescript
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
          <BiLogoPostgresql
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
          <FaGithub
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
          <SiDrizzle
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
          <SiPrisma
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
          <IoLogoVercel
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
          <IoLogoFirebase
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
          <SiVitest
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
          <SiJest
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
          <SiJira
            size={25}
            className="dark:text-zinc-300 text-zinc-600 flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
