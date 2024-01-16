import { OWNER, fetchRepos } from '@/lib/utils';
import { Eye, GitFork, Github, Loader2, Star, Youtube } from 'lucide-react';
import { Suspense } from 'react';
import RepoLanguagesSkeleton from './skeletons/RepoLanguagesSkeleton';
import Link from 'next/link';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import RepoThumbnail from './RepoThumbnail';
import RepoPulls from './RepoPulls';
import ProjectsPagination from './ProjectsPagination';
import RepoLanguages from './RepoLanguages';
import { Card } from './ui/card';
import { unstable_noStore as noStore } from 'next/cache';

async function Projects({
  sort,
  page,
  per_page,
}: {
  sort?: 'updated' | 'created' | 'pushed' | 'full_name' | undefined;
  page?: string;
  per_page?: string;
}) {
  noStore();
  // fetch repos
  const repos = await fetchRepos({
    username: OWNER,
    sort,
    page: Number(page),
    per_page: Number(per_page),
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        {repos?.map((repo) => (
          <Card key={repo.id} className="p-3">
            <Suspense
              fallback={
                <div className="w-full h-40 dark:bg-gray-900 bg-gray-200 rounded-lg animate-pulse" />
              }
            >
              <RepoThumbnail tag={repo.name} />
            </Suspense>
            <div className="flex items-center justify-between">
              <p className="text-xl font-medium">{repo.name}</p>
              <div className="flex items-center gap-2">
                <Link href={repo.html_url}>
                  <Github size={18} className="text-purple-500" />
                </Link>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href={``}>
                        <Youtube size={18} className="text-purple-500" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">500k views</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-3">
                <Star size={18} />
                <p>{repo.stargazers_count}</p>
              </div>
              <Suspense fallback={<Loader2 className="animate-spin" />}>
                <RepoPulls repo={repo.name} />
              </Suspense>
              <div className="flex items-center gap-3">
                <GitFork size={18} />
                <p>{repo.forks_count}</p>
              </div>
              <div className="flex items-center gap-3">
                <Eye size={18} />
                <p>{repo.watchers_count}</p>
              </div>
            </div>
            <Suspense fallback={<RepoLanguagesSkeleton />}>
              <RepoLanguages repo={repo.name} />
            </Suspense>
            <div className="flex items-center flex-wrap gap-3 mt-3">
              {repo.topics?.map((topic, i) => (
                <span
                  key={i}
                  className="text-[0.7rem] align-middle text-center py-1 px-2 rounded-lg dark:bg-gray-800 bg-gray-800 text-white"
                >
                  {topic}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <ProjectsPagination totalPages={repos.length} />
    </>
  );
}

export default Projects;
