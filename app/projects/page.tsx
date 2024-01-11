import Projects from '@/components/Projects';
import ProjectsSkeleton from '@/components/skeletons/ProjectsSkeleton';
import React, { Suspense } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Github, Youtube } from 'lucide-react';

function ProjectsPage({
  searchParams,
}: {
  searchParams?: {
    sort?: 'updated' | 'created' | 'pushed' | 'full_name' | undefined;
    page?: string;
    per_page?: string;
  };
}) {
  return (
    <>
      <h1 className="text-3xl mt-3 font-medium">Projects</h1>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Github size={18} className="text-purple-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">repo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Youtube size={18} className="text-purple-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">livestream</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects
          sort={searchParams?.sort}
          page={searchParams?.page}
          per_page={searchParams?.per_page}
        />
      </Suspense>
    </>
  );
}

export default ProjectsPage;
