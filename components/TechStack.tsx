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
    <div className="relative block max-w-full md:max-w-[600px] mx-auto overflow-hidden mt-10">
      <div className="relative">
        <div className="pointer-events-none absolute -left-px -top-6 z-10 h-24 w-2 bg-gradient-to-r from-white px-4 py-2 md:w-8 lg:w-24 dark:from-[#020817] dark:via-[#020817ea]" />
        <div className="pointer-events-none absolute -top-6 right-0 z-10 h-24 w-4 bg-gradient-to-l from-white px-4 py-2 md:w-8 lg:w-24 dark:from-[#020817] dark:via-[#020817]" />
        <div className="flex items-center justify-center gap-x-5 animate-slide ">
          <RiNextjsFill
            size={30}
            className="dark:text-zinc-300 text-zinc-600"
          />
          <RiTailwindCssFill
            size={30}
            className="dark:text-zinc-300 text-zinc-600"
          />
          <RiReactjsFill
            size={30}
            className="dark:text-zinc-300 text-zinc-600"
          />
          <SiTypescript
            size={30}
            className="dark:text-zinc-300 text-zinc-600"
          />
          <BiLogoPostgresql
            size={30}
            className="dark:text-zinc-300 text-zinc-600"
          />
          <FaGithub size={30} className="dark:text-zinc-300 text-zinc-600" />
          <SiDrizzle size={30} className="dark:text-zinc-300 text-zinc-600" />
          <SiPrisma size={30} className="dark:text-zinc-300 text-zinc-600" />
          <IoLogoVercel
            size={30}
            className="dark:text-zinc-300 text-zinc-600"
          />
          <IoLogoFirebase
            size={30}
            className="dark:text-zinc-300 text-zinc-600"
          />
          <SiVitest size={30} className="dark:text-zinc-300 text-zinc-600" />
          <SiJest size={30} className="dark:text-zinc-300 text-zinc-600" />
          <SiJira size={30} className="dark:text-zinc-300 text-zinc-600" />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
