function TestimonialsSkeleton() {
  return (
    <div className="flex gap-4 items-center overflow-x-scroll mt-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="w-1/2 flex-shrink-0 flex-grow-0 basis-auto dark:bg-gray-900 bg-gray-200 animate-pulse h-60 rounded-lg"
        />
      ))}
    </div>
  );
}

export default TestimonialsSkeleton;
