function RepoLanguagesSkeleton() {
  return (
    <div className="flex items-center gap-3 mt-3 border-t pt-2 divide-x">
      {[...Array(3).keys()].map((i) => (
        <div
          key={i}
          className="w-10 h-3 rounded-lg dark:bg-gray-900 bg-gray-200 animate-pulse pl-3 first:pl-0"
        />
      ))}
    </div>
  );
}

export default RepoLanguagesSkeleton;
