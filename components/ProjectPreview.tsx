import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="zinc-ring-shadow rounded-lg p-4">
      <div className="flex items-center gap-x-1">
        {typeof project.logo === 'string' ? (
          <Image
            priority
            src={project.logo as string}
            width={100}
            height={100}
            alt={project.name}
            className="object-cover dark:invert"
          />
        ) : (
          project.logo
        )}

        <span>-</span>
        <h1 className="text-sm tracking-tight font-semibold">{project.name}</h1>
      </div>
      <p className="mt-2 text-sm tracking-tight leading-none">
        {project.description}
      </p>
      <div className="my-5 space-y-2 text-zinc-800 dark:text-zinc-200">
        <div className="flex items-center gap-x-4">
          <FaGithub />
          <Link
            target="_blank"
            href={project.repo}
            className="text-xs md:text-sm tracking-tight font-semibold"
          >
            {project.repo}
          </Link>
        </div>
        <div className="flex items-center gap-x-4">
          <FaEye className="" />
          <Link
            target="_blank"
            href={project.live_url}
            className="text-xs md:text-sm tracking-tight font-semibold"
          >
            {project.live_url}
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-x-4 mt-3">
        {project.stack.map((s) => s.icon)}
      </div>
    </div>
  );
}

export default ProjectPreview;
