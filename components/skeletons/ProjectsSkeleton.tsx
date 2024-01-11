import RepoLanguagesSkeleton from './RepoLanguagesSkeleton';

function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 max-w-4xl mx-auto">
      {[...Array(5).keys()].map((i) => (
        <div
          key={i}
          className="border border-purple-500 border-opacity-30 rounded-lg p-3"
        >
          <div className="w-1/3 h-5 dark:bg-gray-900 bg-gray-200  rounded-lg animate-pulse" />
          <div className="flex items-center justify-between mt-3">
            {[...Array(3).keys()].map((i) => (
              <div
                key={i}
                className="w-1/3 h-3 rounded-lg dark:bg-gray-900 bg-gray-200 animate-pulse"
              />
            ))}
          </div>
          <RepoLanguagesSkeleton />
          <div className="flex items-center flex-wrap gap-3 mt-3">
            {[...Array(6).keys()].map((i) => (
              <div
                key={i}
                className="w-1/6 h-3 rounded-lg dark:bg-gray-900 bg-gray-200 animate-pulse py-1 px-2"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsSkeleton;
