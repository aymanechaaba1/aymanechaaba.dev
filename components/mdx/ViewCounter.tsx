'use client';

export default function ViewCounter({ views }: { views: string }) {
  return (
    <p className="text-neutral-600 dark:text-neutral-400">{`${views} views`}</p>
  );
}
