import { RiNextjsFill, RiTailwindCssFill, RiReactjsFill } from 'react-icons/ri';
import {
  SiTypescript,
  SiDrizzle,
  SiPrisma,
  SiClerk,
  SiShadcnui,
} from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { IoLogoVercel, IoLogoFirebase } from 'react-icons/io5';
import { BiLogoPostgresql } from 'react-icons/bi';

function TechStack() {
  return (
    <div className="my-10 relative overflow-hidden whitespace-nowrap md:max-w-[500px] mx-auto">
      <div className="flex items-center justify-center gap-x-5 animate-slide ">
        <RiNextjsFill size={25} className="dark:text-zinc-300 text-zinc-600" />
        <RiTailwindCssFill
          size={25}
          className="dark:text-zinc-300 text-zinc-600"
        />
        <RiReactjsFill size={25} className="dark:text-zinc-300 text-zinc-600" />
        <SiTypescript size={25} className="dark:text-zinc-300 text-zinc-600" />
        <BiLogoPostgresql
          size={25}
          className="dark:text-zinc-300 text-zinc-600"
        />
        <FaGithub size={25} className="dark:text-zinc-300 text-zinc-600" />
        <SiDrizzle size={25} className="dark:text-zinc-300 text-zinc-600" />
        <SiPrisma size={25} className="dark:text-zinc-300 text-zinc-600" />
        <IoLogoVercel size={25} className="dark:text-zinc-300 text-zinc-600" />
        <IoLogoFirebase
          size={25}
          className="dark:text-zinc-300 text-zinc-600"
        />
      </div>
    </div>
  );
}

export default TechStack;
