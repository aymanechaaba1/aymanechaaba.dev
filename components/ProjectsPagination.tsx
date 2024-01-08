'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function ProjectsPagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = searchParams.get('page');
  const sortBy = searchParams.get('sort');
  const perPage = searchParams.get('per_page');

  const newSearchParams = new URLSearchParams();

  return (
    <div className="flex items-center justify-between mx-auto my-5">
      {Number(currentPage) > 1 ? (
        <div className="p-1 rounded-lg flex justify-center items-center border">
          <ArrowLeft
            size={20}
            className="dark:text-gray-200 text-gray-800 cursor-pointer"
            onClick={() => {
              newSearchParams.set('page', `${Number(currentPage) - 1}`);
              sortBy && newSearchParams.set('sort', sortBy);
              perPage && newSearchParams.set('per_page', perPage);
              replace(`${pathname}/?${newSearchParams.toString()}`);
            }}
          />
        </div>
      ) : (
        <div />
      )}

      <span className="font-bold">{currentPage}</span>
      {Number(currentPage) !== totalPages ? (
        <div className="p-1 rounded-lg flex justify-center items-center border">
          <ArrowRight
            size={20}
            className="dark:text-gray-200 text-gray-800 cursor-pointer"
            onClick={() => {
              newSearchParams.set('page', `${Number(currentPage) + 1}`);
              sortBy && newSearchParams.set('sort', sortBy);
              perPage && newSearchParams.set('per_page', perPage);
              replace(`${pathname}/?${newSearchParams.toString()}`);
            }}
          />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default ProjectsPagination;
