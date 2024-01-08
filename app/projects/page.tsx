import Projects from '@/components/Projects';
import ProjectsSkeleton from '@/components/skeletons/ProjectsSkeleton';
import React, { Suspense } from 'react';

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
      <h1 className="text-3xl mt-3">Projects</h1>
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
