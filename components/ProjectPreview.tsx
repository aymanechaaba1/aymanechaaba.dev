import { cn, removeHttps } from '@/lib/utils';
import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="zinc-ring-shadow rounded-lg p-4">
      <div className="flex items-center gap-x-1">
        <Link href={project.live_url}>
          {project?.logo?.url ? (
            <Image
              priority
              src={project.logo.url}
              width={80}
              height={80}
              alt={project.name}
              className="object-cover dark:invert"
            />
          ) : (
            <p
              className={cn(
                'font-bold tracking-tight',
                project.logo?.className
              )}
            >
              {project.logo?.name}
            </p>
          )}
          {project.logo?.svg && project.logo.svg}
        </Link>

        <span>-</span>
        <h1 className="text-sm tracking-tight font-semibold">{project.name}</h1>
      </div>
      <p className="mt-2 text-sm tracking-tight font-medium">
        {project.description}
      </p>
      <div className="my-5 space-y-2 text-zinc-800 dark:text-zinc-200">
        <div className="flex items-center gap-x-4">
          <FaGithub className="text-[15px]" />
          <Link
            target="_blank"
            href={project.repo}
            className="text-xs lg:text-sm tracking-tight font-semibold"
          >
            {removeHttps(project.repo)}
          </Link>
        </div>
        <div className="flex items-center gap-x-4">
          <FaEye />
          <Link
            target="_blank"
            href={project.live_url}
            className="text-xs md:text-sm tracking-tight font-semibold"
          >
            {removeHttps(project.live_url)}
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-x-4 mt-3 overflow-x-scroll shrink-0">
        {project.stack.map((s) => s.icon)}
      </div>
    </div>
  );
}

export default ProjectPreview;
